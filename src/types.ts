enum RoomCategory {
    LABORATOIRE = "Laboratoire",
    AMPHITEATRE = "Amphiteatre",
    SALLE_DE_CLASSE = "Salle de classe",
    OPEN_SPACE = "Open space"
}

type Room = {
    name: string;
    capacity: number;
    category: RoomCategory;
    users: User[]
}

type User = {
    name: string;
    room?: string;
}

export { RoomCategory }
export type { Room, User }

