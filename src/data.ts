import { Room, RoomCategory, User } from "./types"


const roomsData: Room[] = [
    {
       "name":"Finistère",
       "capacity":3,
       category: RoomCategory.AMPHITEATRE,
       "users":[
          
       ]
    },
    {
       "name":"Côtes d'Armor",
       "capacity":2,
       category: RoomCategory.OPEN_SPACE,
       "users":[
          
       ]
    },
    {
      "name":"Ile et Vilaine",
      "capacity":2,
      category: RoomCategory.AMPHITEATRE,
      "users":[
         
      ]
   },
   {
      "name":"Morbihan",
      "capacity":4,
      category: RoomCategory.OPEN_SPACE,
      "users":[
         
      ]
   },
 ]

const usersData: User[] = [
    {
       "name":"Thomas"
    },
    {
       "name":"Valentin"
    },
    {
      "name":"Maxime"
    },
    {
      "name":"Malcom"
    },
    {
      "name":"Théophile"
    },
    {
      "name":"Arthur"
    },
    {
      "name":"Adrien"
    }
 ]


export {
      roomsData,
      usersData
  }

