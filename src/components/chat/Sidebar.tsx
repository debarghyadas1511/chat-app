'use client'
import { useChatStore } from "@/features/chat/chatStore";

export default function Sidebar() {
    const { users, selectUser, selectedUser } = useChatStore();
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b font-semibold text-lg">
                Chats
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => selectUser(user)}
                        className={`p-4 cursor-pointer border-b ${selectedUser?.id === user.id
                            ? "bg-blue-100"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}