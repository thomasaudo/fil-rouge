import { User } from "../types";

const UserDetails = (props: { user: User }) => {
  const { user } = props;
  return (
    <>
      <p>Name: {user.name}</p>
    </>
  );
};

export { UserDetails };
