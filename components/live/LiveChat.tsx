"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ChatMessage, getStarterMessages } from "@/data/chat";
import { LiveSession } from "@/data/sessions";

type LiveChatProps = {
  session: LiveSession;
};

const quickQuestions = ["Is it original?", "Do you deliver?", "Any other sizes?"];

export default function LiveChat({ session }: LiveChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    getStarterMessages(session)
  );
  const [text, setText] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  // keep the newest message in view
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage(messageText: string) {
    const trimmed = messageText.trim();
    if (trimmed === "") return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), name: "You", text: trimmed },
    ]);
    setText("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(text);
  }

  return (
    <Card className="flex h-[28rem] flex-col gap-0 overflow-hidden py-0 lg:h-full">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="font-semibold text-slate-900">Live chat</h2>
        <span className="text-xs text-slate-500">Ask the vendor anything</span>
      </div>
      <Separator />

      <ul
        ref={listRef}
        aria-label="Chat messages"
        className="flex-1 space-y-3 overflow-y-auto px-4 py-3"
      >
        {messages.map((message) => (
          <li key={message.id} className="text-sm leading-snug">
            <span
              className={`mr-1.5 font-semibold ${
                message.isVendor ? "text-brand-700" : "text-slate-900"
              }`}
            >
              {message.name}
            </span>
            {message.isVendor && (
              <span className="mr-1.5 rounded bg-brand-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-brand-700">
                Vendor
              </span>
            )}
            <span className="text-slate-700">{message.text}</span>
          </li>
        ))}
      </ul>

      <Separator />
      <div className="space-y-3 p-3">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {quickQuestions.map((question) => (
            <Button
              key={question}
              variant="outline"
              size="sm"
              onClick={() => sendMessage(question)}
              className="shrink-0 rounded-full text-xs"
            >
              {question}
            </Button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="chat-input" className="sr-only">
            Type a message
          </label>
          <Input
            id="chat-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask a question..."
            autoComplete="off"
            className="rounded-full"
          />
          <Button
            type="submit"
            size="icon"
            aria-label="Send message"
            className="shrink-0 rounded-full"
          >
            <SendHorizontal />
          </Button>
        </form>
      </div>
    </Card>
  );
}
