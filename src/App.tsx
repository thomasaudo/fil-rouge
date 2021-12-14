import React, { useState } from "react";
import { UserList, Map } from "./components";
import { Room, User } from "./types";


function App() {
  const [users, setUsers] = useState<User[]>([
    {
      name: "Thomas",
    },
    {
      name: "Alexis",
    },
  ]);

  const [rooms, setRooms] = useState<Room[]>([
    {
      name: "Finistère",
      place: 3,
    },
    {
      name: "Côtes d'Armor",
      place: 2,
    },
  ]);

  return (
    <div className="m-4 flex">
      <div className="mr-4">
        <UserList users={users} />
      </div>
      <div className="">
        <Map rooms={rooms} />
      </div>
    </div>
  );
}

export default App;
