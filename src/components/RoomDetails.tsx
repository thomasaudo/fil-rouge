import { Room } from "../types";

const RoomDetails = (props: { room: Room }) => {
  const { room } = props;
  return (
    <>
      <p>Room: {room.name} </p>
      <p>Places: {room.place} </p>
      <div className="flex">
        {[...Array(room.place)].map((e, i) => (
          <div className="bg-red-300 rounded-md p-2 text-red-700 mr-2">
            Empty
          </div>
        ))}
      </div>
    </>
  );
};

export { RoomDetails };
