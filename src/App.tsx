import React, { useState } from "react";
import { UserList, RoomList } from "./components";
import { AddUser } from "./components/AddUser";
import { FindUser } from "./components/FindUser";
import { roomsData, usersData } from "./data";
import { Room, RoomCategory, User } from "./types";

function App() {
  /**
   * TODO: Refactor both placeUser and removeUser
   * Do this inside RoomDetails or whatever, or do it with index.
   */

  /**
   * Place a user in a certain room.
   * @param user
   * @param room
   */
  const placeUser = (user: User, room: Room) => {
    // Je ne comprends pas pourquoi ce bout de code met à jour le state
    if (user.room) {
      let oldRoom = rooms.find((x) => x.name === user.room);
      if (oldRoom) {
        oldRoom.users = oldRoom.users.filter((x) => x.name !== user.name);
      }
    }
    user.room = room.name;
    let updatedRoom = rooms.find((x) => x.name === room.name);
    if (updatedRoom) {
      updatedRoom.users.push(user);
      setRooms(
        orderRooms([updatedRoom, ...rooms.filter((x) => x.name !== room.name)])
      );
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
    let updatedRoom = rooms.find((x) => x.name === room.name);
    if (updatedRoom) {
      updatedRoom.users = updatedRoom.users.filter((x) => x.name !== user.name);
      setRooms(
        orderRooms([updatedRoom, ...rooms.filter((x) => x.name !== room.name)])
      );
      setUsers(
        orderArray(
          users.map((x) =>
            x.name === user.name ? { name: x.name, room: undefined } : x
          )
        )
      );
    }
  };

  const addUser = (user: User) => {
    setUsers(orderArray([...users, user]));
  };

  const findUser = (name: string) => {
    return users.filter((x) => x.name.startsWith(name));
  };

  const orderArray = <T extends { name: string }>(data: T[]): T[] => {
    return data.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  };

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
    <div className="w-full">
      <h1 className="text-2xl text-gray-800 font-bold mx-4 my-2">Fil Rouge </h1>
      <p className="mx-4 mt-2">
        Ce projet permet d'affecter des utilisateurs à une salle.
      </p>
      <p className="mx-4 text-sm text-gray-800">
        Chaque salle dispose d'un nombre limité de place. Une salle fait
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
