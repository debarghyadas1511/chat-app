import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";


export default function ChatWindow() {
    return (
        <div className="flex flex-col h-full">
            <ChatHeader />
            <MessageList />
            <MessageInput />
        </div>
    );
}