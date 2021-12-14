import { User } from "../types";
import { UserDetails } from "./index";

const UserList = (props: { users: User[] }) => {
    return (
      <div>
        {props.users.map((user) => (
          <div
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