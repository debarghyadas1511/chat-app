"use client";

import { useState } from "react";
import { useChatStore } from "@/features/chat/chatStore";

export default function MessageInput() {
    const [text, setText] = useState("");
    const { sendMessage, selectedUser } = useChatStore();

    const handleSend = () => {
        if (!text.trim()) return;
        sendMessage(text);
        setText("");
    };

    if (!selectedUser) return null;

    return (
        <div className="p-4 border-t bg-white flex gap-2">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border rounded-full px-4 py-2 outline-none"
            />
            <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-5 rounded-full"
            >
                Send
            </button>
        </div>
    );
}