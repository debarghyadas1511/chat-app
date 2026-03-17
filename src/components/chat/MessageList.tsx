import MessageBubble from "./MessageBubble";


export default function MessageList() {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
            <MessageBubble text="Hey 👋" isOwn />
            <MessageBubble text="Hello!" />
            <MessageBubble text="How are you?" isOwn />
        </div>
    );
}