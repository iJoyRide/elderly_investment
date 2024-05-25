"use client"
// components/ChatComponent.js
import { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';
import {request} from '@/components/llm';

const ChatComponent = () => {
  const [messages, setMessages] = useState([

    // Add more messages here
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [num, setNum] = useState(0);

  const prompts = [
    "Welcome user to our financial planning assistant. Tell them we're here to help them plan for a secure and enjoyable future. Ask the user to tell about themselves. Say a joke to welcome the user.",
    "Thank the user for sharing. Now, ask about their main goals after retirement.",
    "Acknowledge the user's goals and ask where they want to live after retirement.",
    "Thank the user for the information. Ask if they currently have any investments.",
    "Thank the user for sharing about their investments. Ask about their current finance plans and how they will affect their retirement.",
    "Thank the user. Ask if they anticipate any significant changes in their life that could impact their financial plans.",
    "Acknowledge the user's response. Ask what they currently spend the most money on (top 3 expenses).",
    "Thank the user for sharing. Provide some suggestions on how they could potentially reduce their top expenses.",
    "Ask the user about their risk tolerance when it comes to investments.",
    "Based on the user's risk tolerance, provide some investment suggestions that might suit them."
];

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: messages.length + 1, sender: 'bot', text: newMessage }]);
    setNewMessage('');
    
    var systemMessage = prompts[num];
    var userMessage = newMessage;

    request(systemMessage, userMessage).then((response) => {
      setMessages([...messages, { id: messages.length + 1, sender: 'user', text: response }]);
    });

    var numberHere:number = num + 1;
    setNum(numberHere);
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
