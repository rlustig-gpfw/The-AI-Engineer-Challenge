'use client'

import { useEffect, useRef } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatScreenProps {
  messages: Message[]
  isLoading: boolean
  quickActions: string[]
  onQuickAction: (action: string) => void
  scrollContainerRef: React.RefObject<HTMLDivElement>
  fontSize: number
}

export default function ChatScreen({ messages, isLoading, quickActions, onQuickAction, scrollContainerRef, fontSize }: ChatScreenProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="h-full flex flex-col">
      {/* Messages Area */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
        {messages.map((message, index) => (
          <div key={index} className={`${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div 
              className={`inline-block max-w-[85%] p-3 rounded leading-relaxed whitespace-pre-wrap ${
                message.role === 'user' 
                  ? 'bg-gb-dark text-gb-lightest' 
                  : 'bg-gb-darkest text-gb-screen'
              }`}
              style={{ fontSize: `${fontSize}px` }}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="text-left">
            <div 
              className="inline-block bg-gb-darkest text-gb-screen p-3 rounded"
              style={{ fontSize: `${fontSize}px` }}
            >
              <span className="animate-blink">▮</span> Thinking...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {quickActions.length > 0 && messages.length === 1 && (
        <div className="mt-3 pt-3 border-t border-gb-dark/30">
          <div className="text-[7px] text-gb-darkest mb-2 opacity-70">QUICK START:</div>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => onQuickAction(action)}
                className="bg-gb-dark hover:bg-gb-darkest text-gb-lightest px-2 py-2 rounded button-press transition-all"
                style={{ fontSize: `${Math.max(7, fontSize - 2)}px` }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

