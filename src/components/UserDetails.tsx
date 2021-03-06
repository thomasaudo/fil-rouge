import { DragEvent } from "react";
import { User } from "../types";

const UserDetails = (props: { user: User, fromSearchBar?: boolean }) => {
  const { user } = props;

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("user", JSON.stringify(user));
  };

  const computeClass = () => {
    return user.room
      ? "border-2 border-gray-100 rounded-md p-4 my-2 shadow-md shadow-red-200 hover:shadow-lg hover:shadow-red-300"
      : "border-2 border-gray-100 rounded-md p-4 my-2 shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300";
  };

  return (
    <div
      className={computeClass()}
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      key={user.name}
    >
      <p>Name: {user.name}</p>
      {user.room && <p>Room: {user.room}</p>}
    </div>
  );
};

export { UserDetails };
