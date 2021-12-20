import { ChangeEvent, DragEvent } from "react";
import { Room, RoomCategory, User } from "../types";

const RoomDetails = (props: {
  room: Room;
  removeUser: Function;
  changeRoomCategory: Function;
}) => {
  const { room } = props;

  const removeUser = (user: User) => {
    props.removeUser(user, room);
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>, user: User) => {
    e.dataTransfer.setData("user", JSON.stringify(user));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.changeRoomCategory(room, e.target.value);
  };

  return (
    <>
      <div className="flex justify-between font-semibold text-gray-700 mb-2">
        <p>{room.name} </p>
        <p className="ml-4 text-blue-500">
          <select onChange={handleCategoryChange}>
            {Object.keys(RoomCategory).map((r) => (
              <option
                selected={(RoomCategory as any)[r] === room.category}
                key={r}
                value={r}
              >
                {(RoomCategory as any)[r]}
              </option>
            ))}
          </select>
        </p>
      </div>
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
            <sup
              className="float-right text-xs"
              onClick={() => removeUser(user)}
            >
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
