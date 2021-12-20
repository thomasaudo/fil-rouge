import { DragEvent } from "react";
import { Room, User } from "../types";
import { RoomDetails } from "./index";

const RoomList = (props: {
  rooms: Room[];
  placeUser: Function;
  removeUser: Function;
  changeRoomCategory: Function;
}) => {
  const handleDrop = (e: DragEvent<HTMLDivElement>, room: Room) => {
    if (room.capacity > room.users.length) {
      const user: User = JSON.parse(e.dataTransfer.getData("user"));
      props.placeUser(user, room);
    }
  };

  return (
    <>
      <p className="font-semibold text-lg text-gray-800">Rooms:</p>
      <div className="flex flex-wrap">
        {props.rooms.map((room) => (
          <div
            onDrop={(e) => handleDrop(e, room)}
            onDragOver={(e) => e.preventDefault()}
            key={room.name}
            className="rounded-md p-4 my-2 mx-2 shadow shadow-blue-200 hover:shadow-lg hover:shadow-blue-300"
          >
            <RoomDetails
              changeRoomCategory={props.changeRoomCategory}
              room={room}
              removeUser={props.removeUser}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { RoomList };
