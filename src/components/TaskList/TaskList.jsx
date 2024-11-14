import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ loggedInUserData }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {loggedInUserData.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}></NewTask>;
        }
        if (elem.active) {
          return <ActiveTask key={idx} data={elem}></ActiveTask>;
        }
        if (elem.completed) {
          return <CompletedTask key={idx} data={elem}></CompletedTask>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}></FailedTask>;
        }
      })}
    </div>
  );
};
export default TaskList;
