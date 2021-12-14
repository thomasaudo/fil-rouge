import { DragEvent } from "react";
import { User } from "../types";
import { UserDetails } from "./index";

const UserList = (props: { users: User[] }) => {

    const handleDragStart = (e: DragEvent<HTMLDivElement>, user: User)=> {
      e.dataTransfer.setData("user", JSON.stringify(user))
    }

    return (
      <div>
        <p className="font-semibold text-lg text-gray-800">Users:</p>
        {props.users.map((user) => (
          <div
            draggable={true}
            onDragStart={(e) => handleDragStart(e, user)}
            key={user.name}
            className="border-2 border-gray-100 rounded-md p-4 my-2"
          >
            <UserDetails user={user} />
          </div>
        ))}
      </div>
    );
  };

  export {UserList}