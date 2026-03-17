export default function MessageInput() {
    return (
        <div className="p-4 border-t bg-white flex gap-2">
            <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-full px-4 py-2 outline-none"
            />
            <button className="bg-blue-500 text-white px-5 rounded-full">
                Send
            </button>
        </div>
    );
}