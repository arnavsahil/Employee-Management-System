import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = ({ loggedInUserData, changeUser }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header
        changeUser={changeUser}
        // loggedInUserData={loggedInUserData}
      ></Header>
      <TaskListNumbers loggedInUserData={loggedInUserData}></TaskListNumbers>
      <TaskList loggedInUserData={loggedInUserData}></TaskList>
    </div>
  );
};
export default EmployeeDashboard;
