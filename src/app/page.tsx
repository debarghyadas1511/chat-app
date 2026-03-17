import ChatLayout from "@/components/chat/ChatLayout";
import ChatWindow from "@/components/chat/ChatWindow";
import Sidebar from "@/components/chat/Sidebar";

export default function Home() {
    return (
        <ChatLayout
            sidebar={<Sidebar />}
            chat={<ChatWindow />}
        />
    );
}