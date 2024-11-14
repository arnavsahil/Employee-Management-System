const Header = ({ changeUser }) => {
  const logOutUser = () => {
    changeUser("");
    // console.log("Hello");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {" "}
          userName
          {/* {loggedInUserData.firstName} */}
        </span>
      </h1>
      <button
        onClick={() => logOutUser()}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small "
      >
        Log out
      </button>
    </div>
  );
};
export default Header;
