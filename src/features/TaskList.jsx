import Task from "./Task";
import Button from "../components/Button";
import ModalWindow from "../components/ModalWindow";
import Icon from "../components/Icon";
import { useDate } from '../components/ModalWindow';
import useClose from '../hooks/useClose'


function TaskList({ title, setTitle, description, setDescription, dueDate, setDueDate, onSelectTask, onSaveTask, tasks , isShifted, type }) {
    const {isOpen, openWindow, closeWindow} = useClose(); 
    const {todayDate, upcomingDate} = useDate();
    const todayTasks = type === 'upcoming' ?  tasks.filter((task) => task.dueDate > todayDate && task.dueDate <= upcomingDate) : tasks.filter((task) => task.dueDate === todayDate);
    return (
        <ul className={`task_list ${isShifted ? 'task_list-shifted' : ''}`}>
            <h1>Today <span>{todayTasks.length}</span></h1>
            <Button kind="_create-task" onClick={openWindow}> <Icon type='add'></Icon>Add New Task</Button>
            {isOpen ? <ModalWindow onClose={closeWindow} title={title} setTitle={setTitle} description={description} setDescription={setDescription} dueDate={dueDate} setDueDate={setDueDate} onSave={onSaveTask}/> : null}
            {todayTasks.map((value, index) => (
                <Task title={value.title} description={value.description} dueDate={value.dueDate} isDone={value.isDone} key={index} onClick={() =>onSelectTask(value, index)} />
            ))}
        </ul>

    )
}

export default TaskList;