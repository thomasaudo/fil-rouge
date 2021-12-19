import { DragEvent } from "react";
import { Room, User } from "../types";

const RoomDetails = (props: { room: Room; removeUser: Function }) => {
  const { room } = props;

  const removeUser = (user: User) => {
    props.removeUser(user, room);
  };
  
  const handleDragStart = (e: DragEvent<HTMLDivElement>, user: User) => {
    e.dataTransfer.setData("user", JSON.stringify(user));
  };

  return (
    <>
      <p>Room: {room.name} </p>
      <p>Capacity: {room.capacity} </p>
      <p>Available: {room.capacity - room.users.length}</p>
      <div className="flex">
        {room.users.map((user) => (
          <div
            className="bg-red-300 rounded-md p-2 text-red-700 mr-2"
            key={user.name}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, user)}
          >
            <sup className="float-right text-xs" onClick={() => removeUser(user)}>
              x
            </sup>
            {user.name}
          </div>
        ))}
        {[...Array(room.capacity - room.users.length)].map((e, i) => (
          <div
            className="bg-green-300 rounded-md p-2 text-green-700 mr-2"
            key={i}
          >
            Empty
          </div>
        ))}
      </div>
    </>
  );
};

export { RoomDetails };
