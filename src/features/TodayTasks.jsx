import TaskList from "./TaskList";
import { useOutletContext } from "react-router-dom";

function TodayTasks() {
  const props = useOutletContext();
  return <TaskList {...props}/>;
}

export default TodayTasks;
