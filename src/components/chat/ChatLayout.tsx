type Props = {
    sidebar: React.ReactNode;
    chat: React.ReactNode;
};

export default function ChatLayout({ sidebar, chat }: Props) {
    return (
        <div className="h-screen flex bg-gray-100">
            {/* Sidebar */}
            <div className="w-[320px] border-r bg-white">
                {sidebar}
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {chat}
            </div>
        </div>
    );
}