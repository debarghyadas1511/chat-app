'use client'

import { useChatStore } from "@/features/chat/chatStore";
import MessageBubble from "./MessageBubble";


export default function MessageList() {
    const { selectedUser, messages } = useChatStore();

    if (!selectedUser) {
        return (
            <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a chat to start messaging
            </div>
        );
    }

    const chatMessages = messages[selectedUser.id] || [];

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
            {chatMessages.map((msg) => (
                <MessageBubble
                    key={msg.id}
                    text={msg.text}
                    isOwn={msg.senderId === "me"}
                />
            ))}
        </div>
    );
}