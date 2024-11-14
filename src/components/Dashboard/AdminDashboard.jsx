import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div h-screen w-full p-7>
      <Header changeUser={changeUser}></Header>
      <CreateTask></CreateTask>
      <AllTask></AllTask>
    </div>
  );
};
export default AdminDashboard;
