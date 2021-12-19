import { DragEvent } from "react";
import { User } from "../types";
import { UserDetails } from "./index";

const UserList = (props: { users: User[] }) => {
  return (
    <div>
      <p className="font-semibold text-lg text-gray-800">Users:</p>
      {props.users.map(
        (user) =>
          user.room === undefined && (
            <div
            key={user.name}
            >
              <UserDetails user={user} />
            </div>
          )
      )}
    </div>
  );
};

export { UserList };
