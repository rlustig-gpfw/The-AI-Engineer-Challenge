'use client'

import { useState, useRef, useEffect } from 'react'
import GameboyConsole from '../components/GameboyConsole'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4">
      <GameboyConsole />
    </main>
  )
}

