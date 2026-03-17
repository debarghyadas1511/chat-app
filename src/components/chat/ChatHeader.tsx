export default function ChatHeader() {
    return (
        <div className="p-4 border-b bg-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-green-500">Online</p>
            </div>
        </div>
    );
}