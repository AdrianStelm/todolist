import Task from "./Task";
import Button from "../components/Button";
import { useState} from "react";
import ModalWindow from "../components/ModalWindow";
import Icon from "../components/Icon";


function TaskList({ title, setTitle, description, setDescription, dueDate, setDueDate, onSelectTask, onSaveTask,tasks , isShifted }) {
    const [isOpen, setOpen] = useState(false); 

    const openWindow = () => {
        setOpen(true)
    }

    const closeWindow = () => {
        setOpen(false)
    }

    return (
        <ul className={`task_list ${isShifted ? 'task_list-shifted' : ''}`}>
            <Button kind="_create-task" onClick={openWindow}> <Icon type='add'></Icon>Add New Task</Button>
            {isOpen ? <ModalWindow onClose={closeWindow} title={title} setTitle={setTitle} description={description} setDescription={setDescription} dueDate={dueDate} setDueDate={setDueDate} onSave={onSaveTask}/> : null}
            {tasks.map((value, index) => (
                <Task title={value.title} description={value.description} dueDate={value.dueDate} isDone={value.isDone} key={index} onClick={() =>onSelectTask(value, index)} />
            ))}
        </ul>

    )
}

export default TaskList;