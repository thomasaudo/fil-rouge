import { Room } from "../types";

const RoomDetails = (props: { room: Room }) => {
  const { room } = props;
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
          >
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
