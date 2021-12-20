import React, { ChangeEvent, useState } from "react";
import { UserDetails } from ".";
import { User } from "../types";

const FindUser = (props: { findUser: Function }) => {
  const [name, setName] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value)
    setUsers(props.findUser(e.target.value));
  };

  return (
    <div>
      <p className="font-semibold text-lg text-gray-800">
        Rechercher un utilisateur
      </p>
      <form>
        <input
          placeholder="Name"
          onChange={handleSubmit}
          className="bg-gray-100 p-2 mr-1 rounded text-sm"
          value={name}
        />
        <input
          type="submit"
          className="bg-blue-500 text-sm text-white rounded p-2"
          value="Rechercher"
        />
      </form>
      {name.length > 0 && users.map((u) => (
        <UserDetails fromSearchBar={true} user={u} key={u.name} />
      ))}
    </div>
  );
};

export { FindUser };
