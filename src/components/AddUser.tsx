import React, { FormEvent, useState } from "react";

const AddUser = (props: { addUser: Function }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addUser({
      name: name,
    });
    setName(" ")
  };

  return (
    <div>
      <p className="font-semibold text-lg text-gray-800">
        Ajouter un utilisateur
      </p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="bg-gray-100 p-2 mr-1 rounded text-sm"
          minLength={4}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="submit"
          className="bg-blue-500 text-sm text-white rounded p-2"
          value="Ajouter"
        />
      </form>
    </div>
  );
};

export { AddUser };
