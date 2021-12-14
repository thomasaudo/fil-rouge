type Room = {
    name: string;
    place: number;
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