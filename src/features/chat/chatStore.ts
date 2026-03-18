import { create } from "zustand";
import { Message, ChatUser } from "@/types/chat";

type ChatState = {
    users: ChatUser[];
    selectedUser: ChatUser | null;
    messages: Record<string, Message[]>;

    selectUser: (user: ChatUser) => void;
    sendMessage: (text: string) => void;
};

export const useChatStore = create<ChatState>((set, get) => ({
    users: [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
    ],
    selectedUser: null,
    messages: {},

    selectUser: (user) => set({ selectedUser: user }),

    sendMessage: (text) => {
        const { selectedUser, messages } = get();
        if (!selectedUser) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            senderId: "me",
            receiverId: selectedUser.id,
            createdAt: new Date().toISOString(),
        };

        const chatMessages = messages[selectedUser.id] || [];

        set({
            messages: {
                ...messages,
                [selectedUser.id]: [...chatMessages, newMessage],
            },
        });
    },
}));