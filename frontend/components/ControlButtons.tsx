'use client'

import { useState } from 'react'

interface ControlButtonsProps {
  inputMessage: string
  setInputMessage: (message: string) => void
  onSend: (message: string) => void
  isLoading: boolean
  onScrollUp: () => void
  onScrollDown: () => void
  onFontSizeDecrease: () => void
  onFontSizeIncrease: () => void
}

export default function ControlButtons({ 
  inputMessage, 
  setInputMessage, 
  onSend,
  isLoading,
  onScrollUp,
  onScrollDown,
  onFontSizeDecrease,
  onFontSizeIncrease
}: ControlButtonsProps) {
  const [showInput, setShowInput] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      onSend(inputMessage)
      setShowInput(false)
    }
  }

  return (
    <div>
      {/* D-Pad and Buttons Container */}
      <div className="flex justify-between items-center mb-4">
        {/* D-Pad (Left Side) */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Horizontal bar */}
            <div className="absolute w-full h-8 bg-gb-darkest rounded-sm"></div>
            {/* Vertical bar */}
            <div className="absolute w-8 h-full bg-gb-darkest rounded-sm"></div>
            
            {/* Direction buttons */}
            <button 
              onClick={onScrollUp}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 text-gb-light hover:text-gb-lightest text-xs flex items-center justify-center button-press transition-colors"
              aria-label="Scroll Up"
              title="Scroll up through messages"
            >
              ▲
            </button>
            <button 
              onClick={onScrollDown}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 text-gb-light hover:text-gb-lightest text-xs flex items-center justify-center button-press transition-colors"
              aria-label="Scroll Down"
              title="Scroll down through messages"
            >
              ▼
            </button>
            <button 
              onClick={onFontSizeDecrease}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gb-light hover:text-gb-lightest text-xs flex items-center justify-center button-press transition-colors"
              aria-label="Decrease Font Size"
              title="Decrease font size"
            >
              ◄
            </button>
            <button 
              onClick={onFontSizeIncrease}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gb-light hover:text-gb-lightest text-xs flex items-center justify-center button-press transition-colors"
              aria-label="Increase Font Size"
              title="Increase font size"
            >
              ►
            </button>
            
            {/* Center circle */}
            <div className="absolute w-4 h-4 rounded-full bg-gb-body border-2 border-gb-dark"></div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[6px] text-gb-darkest whitespace-nowrap">
            CROSS KEY
          </div>
        </div>

        {/* A and B Buttons (Right Side) */}
        <div className="relative w-24 h-24">
          {/* B Button (left/top) */}
          <button
            onClick={() => setShowInput(!showInput)}
            disabled={isLoading}
            className="absolute left-0 top-2 w-12 h-12 rounded-full shadow-lg button-press disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white font-bold text-xs"
            style={{
              background: 'linear-gradient(135deg, #e91e8c 0%, #d81b7f 50%, #c01870 100%)',
              boxShadow: '0 4px 0 #8b1155, 0 6px 10px rgba(0,0,0,0.3)'
            }}
          >
            B
          </button>
          
          {/* A Button (right/bottom) */}
          <button
            onClick={() => inputMessage.trim() && onSend(inputMessage)}
            disabled={isLoading || !inputMessage.trim()}
            className="absolute right-0 bottom-2 w-12 h-12 rounded-full shadow-lg button-press disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white font-bold text-xs"
            style={{
              background: 'linear-gradient(135deg, #e91e8c 0%, #d81b7f 50%, #c01870 100%)',
              boxShadow: '0 4px 0 #8b1155, 0 6px 10px rgba(0,0,0,0.3)'
            }}
          >
            A
          </button>
          
          <div className="absolute -bottom-6 right-4 text-[6px] text-gb-darkest">
            B A
          </div>
        </div>
      </div>

      {/* Input Section (toggled by B button) */}
      {showInput && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="bg-gb-darkest rounded p-2 w-full">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-gb-screen text-gb-darkest text-[10px] p-2 rounded border-2 border-gb-dark focus:outline-none focus:border-gb-darkest placeholder-gb-dark/50 box-border"
              autoFocus
              disabled={isLoading}
            />
            <div className="text-[7px] text-gb-light mt-1 opacity-70">
              Press A or Enter to send
            </div>
          </div>
        </form>
      )}

      {/* SELECT and START Buttons */}
      <div className="flex justify-center gap-4 mt-2">
        <button 
          className="bg-gb-darkest text-gb-light text-[6px] px-4 py-1 rounded-full button-press"
          onClick={() => setInputMessage('')}
        >
          SELECT
        </button>
        <button 
          className="bg-gb-darkest text-gb-light text-[6px] px-4 py-1 rounded-full button-press"
          onClick={() => setShowInput(!showInput)}
        >
          START
        </button>
      </div>
    </div>
  )
}

