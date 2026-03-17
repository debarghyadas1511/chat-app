export default function Sidebar() {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b font-semibold text-lg">
                Chats
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {[1, 2, 3, 4].map((chat) => (
                    <div
                        key={chat}
                        className="p-4 hover:bg-gray-100 cursor-pointer border-b flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                        <div>
                            <p className="font-medium">User {chat}</p>
                            <p className="text-sm text-gray-500">Last message...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}