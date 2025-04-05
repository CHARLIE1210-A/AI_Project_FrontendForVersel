import { useState } from 'react';

export default function ChatInterface(){
  // const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([])
  // const [input, setInput] = useState('')

  // const handleSend = async () => {
  //   if (!input.trim()) return

  //   const newMessages = [...messages, { text: input, sender: 'user' }]
  //   setMessages(newMessages)
  //   setInput('')

  //   // Simulate LLM response
  //   const response = await fetch('/api/chat', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ message: input }),
  //   })
  //   const data = await response.json()

  //   setMessages([...newMessages, { text: data.reply, sender: 'bot' }])
  // }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
      <div className="mb-4">
          <h2 className="text-2xl font-bold text-black mb-2">💬 Chat </h2>
        </div>
      

      {/* <main className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-xl ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-300 text-black self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </main> */}

      <footer className="p-4 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border rounded-xl px-4 py-2"
          placeholder="Type a message..."
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          // onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          // onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </footer>
    </div>
  );
}