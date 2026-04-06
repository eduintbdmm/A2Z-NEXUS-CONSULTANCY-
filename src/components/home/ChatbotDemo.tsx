'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Bot, User } from 'lucide-react';
import { chatMessages } from '@/lib/data';

export default function ChatbotDemo() {
  const [visibleMessages, setVisibleMessages] = useState<typeof chatMessages>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!started || currentIndex >= chatMessages.length) return;

    const msg = chatMessages[currentIndex];
    const delay = msg.role === 'bot' ? 1500 : 800;

    if (msg.role === 'bot') {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, msg]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(typingTimer);
    } else {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, started]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  const handleStart = () => {
    setStarted(true);
    setVisibleMessages([]);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setStarted(false);
    setVisibleMessages([]);
    setCurrentIndex(0);
  };

  return (
    <div className="glass-card overflow-hidden max-w-lg mx-auto" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-[var(--color-border-glass)] bg-gradient-to-r from-[var(--color-accent-primary)]/10 to-transparent">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center">
          <Bot size={20} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--color-text-primary)]">A2Z Nexus AI Assistant</div>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Online
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div ref={chatRef} className="h-80 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {!started ? (
          <div className="h-full flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)]/20 to-[var(--color-accent-secondary)]/20 flex items-center justify-center">
              <MessageSquare size={28} className="text-[var(--color-accent-primary)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                See our AI assistant in action. Watch how it handles enterprise inquiries.
              </p>
              <button
                onClick={handleStart}
                className="glow-btn text-sm px-6 py-2.5 cursor-pointer"
              >
                Start Demo Conversation
              </button>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={14} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white rounded-br-md'
                      : 'bg-[var(--color-bg-glass-hover)] text-[var(--color-text-secondary)] rounded-bl-md border border-[var(--color-border-glass)]'
                  }`}
                >
                  {msg.text.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={14} className="text-[var(--color-text-secondary)]" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2 items-start"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="bg-[var(--color-bg-glass-hover)] rounded-2xl rounded-bl-md px-4 py-3 border border-[var(--color-border-glass)]">
                  <div className="typing-indicator">
                    <span /><span /><span />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Replay button */}
        {started && currentIndex >= chatMessages.length && !isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center pt-2"
          >
            <button onClick={handleReset} className="text-xs text-[var(--color-accent-primary)] hover:underline cursor-pointer">
              ↻ Replay Demo
            </button>
          </motion.div>
        )}
      </div>

      {/* Input bar (decorative) */}
      <div className="p-3 border-t border-[var(--color-border-glass)] flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-[var(--color-bg-glass)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-secondary)] border border-[var(--color-border-glass)] outline-none focus:border-[var(--color-accent-primary)]/30"
          disabled
        />
        <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center">
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
