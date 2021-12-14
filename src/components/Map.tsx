import { Room } from "../types";
import { RoomDetails } from "./index";

const Map = (props: { rooms: Room[] }) => {
  return (
    <>
      {props.rooms.map((room) => (
        <div
          key={room.name}
          className="border-2 border-gray-100 rounded-md p-4 my-2"
        >
          <RoomDetails room={room} />
        </div>
      ))}
    </>
  );
};

export { Map };
