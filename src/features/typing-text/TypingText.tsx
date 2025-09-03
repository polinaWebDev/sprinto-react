import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

interface TypingTextProps {
  text: string
  duration?: number
  cursorBlinkSpeed?: number // скорость мигания курсора
}

export const TypingText = ({
  text,
  duration = 2,
  cursorBlinkSpeed = 0.5,
}: TypingTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const [_, setIsTypingDone] = useState(false)

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        text,
        duration,
        ease: 'none',
        onComplete: () => setIsTypingDone(true),
      })
    }

    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: cursorBlinkSpeed,
        ease: 'power1.inOut',
      })
    }
  }, [text, duration, cursorBlinkSpeed])

  return (
    <div className="flex font-mono text-xl whitespace-pre-wrap text-green-500">
      <span ref={textRef}></span>
      <span ref={cursorRef} className="ml-1">
        |
      </span>
    </div>
  )
}
