import TaskList from "./TaskList";
import { useOutletContext } from "react-router-dom";

function UpcomingTasks() {
  const props = useOutletContext();
  return <TaskList {...props} type="upcoming" />;
}

export default UpcomingTasks;
