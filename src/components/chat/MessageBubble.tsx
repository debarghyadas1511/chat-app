type Props = {
    text: string;
    isOwn?: boolean;
};

export default function MessageBubble({ text, isOwn }: Props) {
    return (
        <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
            <div
                className={`px-4 py-2 rounded-xl max-w-xs text-sm ${isOwn
                        ? "bg-blue-500 text-white"
                        : "bg-white border text-gray-800"
                    }`}
            >
                {text}
            </div>
        </div>
    );
}