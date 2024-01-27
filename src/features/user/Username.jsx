import { useSelector } from "react-redux";
// to get something from Redux is to use the useSelector hook

function Username() {
  const username = useSelector((state) => state.user.username); // how we read value from redux store

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
