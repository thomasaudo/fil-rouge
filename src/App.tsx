import React, { useState } from "react";
import { UserList, RoomList, AddUser, FindUser } from "./components";
import { roomsData, usersData } from "./data";
import { Room, RoomCategory, User } from "./types";

/**
 * App component, contains all the logic of the application
 * @returns 
 */
function App() {
  /**
   * Place a user in a certain room.
   * @param user
   * @param room
   */
  const placeUser = (user: User, room: Room) => {
    // Remove user from his room
    if (user.room) {
      let oldRoom = rooms.find((x) => x.name === user.room);
      if (oldRoom) {
        oldRoom.users = oldRoom.users.filter((x) => x.name !== user.name);
      }
    }
    // Set new user's room name
    user.room = room.name;
    // Find the room to update (place user)
    let updatedRoom = rooms.find((x) => x.name === room.name);
    if (updatedRoom) {
      // Place the user
      updatedRoom.users.push(user);
      // Update the rooms
      setRooms(
        orderRooms([updatedRoom, ...rooms.filter((x) => x.name !== room.name)])
      );
      // Update the users
      setUsers(
        orderArray(
          users.map((x) =>
            x.name === user.name ? { name: x.name, room: room.name } : x
          )
        )
      );
    }
  };

  /**
   * Remove an user from a certain room.
   * @param user
   * @param room
   */
  const removeUser = (user: User, room: Room) => {
    // Find the room to update
    let updatedRoom = rooms.find((x) => x.name === room.name);
    if (updatedRoom) {
      // Remove the user from the room
      updatedRoom.users = updatedRoom.users.filter((x) => x.name !== user.name);
      // Update rooms
      setRooms(
        orderRooms([updatedRoom, ...rooms.filter((x) => x.name !== room.name)])
      );
      // Update users, remove the room from user
      setUsers(
        orderArray(
          users.map((x) =>
            x.name === user.name ? { name: x.name, room: undefined } : x
          )
        )
      );
    }
  };

  /**
   * Add an user
   * @param user 
   */
  const addUser = (user: User) => {
    setUsers(orderArray([...users, user]));
  };


  /**
   * Find all the user with a name starting by the 'name' parameter.
   * @param name 
   * @returns 
   */
  const findUser = (name: string) => {
    return users.filter((x) => x.name.startsWith(name));
  };


  /**
   * Order an array of object based on the name property
   * @param data 
   * @returns 
   */
  const orderArray = <T extends { name: string }>(data: T[]): T[] => {
    return data.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  };


  /**
   * Order an array of Room based on the category property
   * @param rooms 
   * @returns 
   */
  const orderRooms = (rooms: Room[]) => {
    return rooms.sort((a, b) => (a.category > b.category ? 1 : -1));
  };

  const changeRoomCategory = (room: Room, category: RoomCategory) => {
    let updatedRoom = rooms.find((x) => x.name === room.name);
    if (updatedRoom) {
      updatedRoom.category = (RoomCategory as any)[category];
      setRooms(
        orderRooms([updatedRoom, ...rooms.filter((x) => x.name !== room.name)])
      );
    }
  };

  const [users, setUsers] = useState<User[]>(orderArray(usersData));
  const [rooms, setRooms] = useState<Room[]>(orderRooms(roomsData));

  return (
    <div className="">
      <div className="bg-gray-50 shadow rounded m-4 py-4">
        <h1 className="text-2xl text-gray-800 font-bold mx-4 my-2">Fil Rouge </h1>
        <p className="mx-4 mt-2">
          Ce projet permet d'affecter des utilisateurs à une salle.
        </p>
        <p className="mx-4 text-sm text-gray-800">
          Chaque salle dispose d'un nombre limité de places. Une salle fait
          également partie d'une catégorie. Les salles sont triées par catégorie.
        </p>
        <p className="mx-4 text-sm text-gray-800">
          Il est possible d'ajouter un utilisateur ainsi que de rechercher des
          utilisateurs grâce à la barre de recherche.
        </p>
        <p className="mx-4 text-sm text-gray-800">
          Pour affecter un utilisateur à une salle, il faut le 'Drag and Drop' sur
          cette dernière.
        </p>
        <p className="mx-4 text-sm text-gray-800">
          Il est également possible de retirer un utilisateur d'une salle. On peut
          également modifier sa salle en utilisant le 'Drag and Drop'
        </p>
        <p className="mx-4 text-sm text-red-600 font-semibold">
          BUG: <span className="text-gray-800">Si on Drag and Drop un utilisateur déjà assigné depuis la barre de recherche, on peut le positionner dans plusieurs salles différentes.</span>
        </p>
      </div>
      <div className="m-4 flex">
        <div className="mr-4">
          <FindUser findUser={findUser} />
          <div className="my-4"></div>
          <AddUser addUser={addUser} />
          <div className="my-4"></div>
          <UserList users={users} />
        </div>
        <div className="w-2/3">
          <RoomList
            rooms={rooms}
            placeUser={placeUser}
            removeUser={removeUser}
            changeRoomCategory={changeRoomCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
