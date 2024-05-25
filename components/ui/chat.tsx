"use client"
// components/ChatComponent.js
import { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';


const ChatComponent = () => {
  const [messages, setMessages] = useState([

    // Add more messages here
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: messages.length + 1, sender: 'bot', text: newMessage }]);
    setNewMessage('');
  };
  return (
    <div className="chat-container">
      <ScrollArea className="chat-scroll-area">
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
      </ScrollArea>
      <div className="chat-input-container">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage} className="chat-send-button">
          Send
        </Button>
      </div>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 800px;
          overflow: hidden;
          padding: 5%;
        }
        .chat-scroll-area {
          flex: 1;
        }
        .chat-viewport {
          padding: 16px;
        }
        .chat-messages {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chat-bubble {
          padding: 10px 16px;
          border-radius: 20px;
          max-width: 75%;
          color: #fff;
          background-color: #007bff;
          align-self: flex-start;
        }
        .chat-bubble.bot {
          background-color: #6c757d;
          align-self: flex-end;
        }
        .chat-input-container {
            display: flex;
            padding: 8px;
            border-top: 1px solid #e1e1e1;
          }
          .chat-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin-right: 8px;
          }
          .chat-send-button {
            padding: 10px 16px;
          }
      `}</style>
    </div>
  );
};

export default ChatComponent;
