export type Message = {
    id: string;
    text: string;
    senderId: string;
    receiverId: string;
    createdAt: string;
};

export type ChatUser = {
    id: string;
    name: string;
};