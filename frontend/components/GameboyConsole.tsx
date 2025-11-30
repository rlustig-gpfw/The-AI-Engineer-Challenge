'use client'

import { useState, useRef, useEffect } from 'react'
import ChatScreen from './ChatScreen'
import ControlButtons from './ControlButtons'

export default function GameboyConsole() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Welcome to MindBoy! 🎮\n\nI\'m here to support you on your mental health journey. How are you feeling today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const [fontSize, setFontSize] = useState(10) // Default 10px
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const quickActions = [
    "I'm feeling anxious",
    "I need motivation",
    "Feeling grateful",
    "Having a tough day"
  ]

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return

    const userMessage = { role: 'user' as const, content: message }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    setShowQuickActions(false)

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please make sure the backend is running on localhost:8000.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = (action: string) => {
    sendMessage(action)
  }

  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -100,
        behavior: 'smooth'
      })
    }
  }

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 100,
        behavior: 'smooth'
      })
    }
  }

  const handleFontSizeDecrease = () => {
    setFontSize(prev => Math.max(8, prev - 1)) // Min 8px
  }

  const handleFontSizeIncrease = () => {
    setFontSize(prev => Math.min(14, prev + 1)) // Max 14px
  }

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Gameboy Body */}
      <div className="bg-gb-body rounded-3xl p-8 shadow-2xl relative overflow-hidden" style={{
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
        width: '100%',
        maxWidth: '576px'
      }}>
        {/* Top Section - Brand */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gb-darkest tracking-widest">MINDBOY™</div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse-glow"></div>
              <div className="text-xs text-gb-darkest ml-1">POWER</div>
            </div>
          </div>
          <div className="text-[8px] text-gb-dark tracking-wider">MENTAL HEALTH SYSTEM</div>
        </div>

        {/* Screen Section */}
        <div className="bg-gb-darkest rounded-lg p-4 mb-6 relative">
          <div className="absolute top-2 left-2 text-[6px] text-gb-light opacity-60">
            DOT MATRIX WITH STEREO SOUND
          </div>
          
          {/* Screen */}
          <div className="bg-gb-screen rounded mt-6 p-4 h-[450px] relative overflow-hidden scanlines crt-effect">
            <ChatScreen 
              messages={messages} 
              isLoading={isLoading}
              quickActions={showQuickActions ? quickActions : []}
              onQuickAction={handleQuickAction}
              scrollContainerRef={scrollContainerRef}
              fontSize={fontSize}
            />
          </div>
        </div>

        {/* Controls Section */}
        <ControlButtons 
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          onSend={sendMessage}
          isLoading={isLoading}
          onScrollUp={handleScrollUp}
          onScrollDown={handleScrollDown}
          onFontSizeDecrease={handleFontSizeDecrease}
          onFontSizeIncrease={handleFontSizeIncrease}
        />

        {/* Bottom Details */}
        <div className="mt-4 flex justify-center gap-8 text-[6px] text-gb-darkest opacity-40">
          <div>◯ HEADPHONES</div>
          <div>EXT</div>
        </div>
      </div>

      {/* Subtle shadow underneath */}
      <div className="absolute -bottom-4 left-8 right-8 h-4 bg-black/20 blur-xl rounded-full"></div>
    </div>
  )
}

