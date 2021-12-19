import { User } from "../types";

const UserDetails = (props: { user: User }) => {
  const { user } = props;

  const computeClass = () => {
    return user.room ? 'border-2 border-gray-100 rounded-md p-4 my-2 shadow-md shadow-red-200'  : 'border-2 border-gray-100 rounded-md p-4 my-2 shadow-md shadow-green-200'
  }

  return (
    <div className={computeClass()}>
      <p>Name: {user.name}</p>
      {user.room && <p>Room: {user.room}</p>}
    </div>
  );
};

export { UserDetails };
