import React, { useState } from "react";
import { UserList, RoomList } from "./components";
import { roomsData, usersData } from "./data";
import { Room, User } from "./types";

function App() {

  // TODO: Refactor, do this inside RoomDetails or whatever, or do it with index.
  const placeUser = (user: User, room: Room) => {
    setUsers(users.filter((x) => x.name !== user.name));
    let updatedRoom = rooms.find((x) => x.name === room.name);
    if (updatedRoom) {
      updatedRoom.users.push(user);
      setRooms([updatedRoom, ...rooms.filter((x) => x.name !== room.name)]);
    }
  };

  const [users, setUsers] = useState<User[]>(usersData);
  const [rooms, setRooms] = useState<Room[]>(roomsData);

  return (
    <div className="m-4 flex">
      <div className="mr-4">
        <UserList users={users} />
      </div>
      <div className="">
        <RoomList rooms={rooms} placeUser={placeUser} />
      </div>
    </div>
  );
}

export default App;
