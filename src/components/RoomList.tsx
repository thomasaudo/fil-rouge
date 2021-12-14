import { DragEvent } from "react";
import { Room, User } from "../types";
import { RoomDetails } from "./index";

const RoomList = (props: { rooms: Room[], placeUser: Function }) => {

  const handleDrop = (e: DragEvent<HTMLDivElement>, room: Room) => {
    const user: User = JSON.parse(e.dataTransfer.getData("user"))
    props.placeUser(user, room)
  }

  return (
    <>
      <p className="font-semibold text-lg text-gray-800">Rooms:</p>
      {props.rooms.map((room) => (
        <div
          onDrop={e => handleDrop(e, room)}
          onDragOver={e => e.preventDefault()}
          key={room.name}
          className="border-2 border-gray-100 rounded-md p-4 my-2"
        >
          <RoomDetails room={room} />
        </div>
      ))}
    </>
  );
};

export { RoomList };
