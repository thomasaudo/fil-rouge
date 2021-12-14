type Room = {
    name: string;
    capacity: number;
    users: User[]
}

type Building = {
    name: string;
    rooms: Room[]
}

type User = {
    name: string;
    room?: string;
}

export type {
    Room, User, Building
}