import Task from "./Task";
import Button from "../components/Button";
import { useState } from "react";
import ModalWindow from "../components/ModalWindow";


function TaskList() {
    const [isOpen, setOpen] = useState(false); 

    const openWindow = () => {
        setOpen(true)
    }

    const closeWindow = () => {
        setOpen(false)
    }

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = {
        title:'title',
        desciption:'lorem ipsum jsdnfisudnfisnidfnk',
        dueDate: new Date(),
        isDone: false
    }
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    return (
        <ul>
            <Button type="_create-task" onOpen={openWindow}> <span className="icon"></span>Add New Task</Button>
            {isOpen ? <ModalWindow onClose={closeWindow}/> : null}
            {existingTasks.map((value, index) => (
                <Task title={value.title} description={value.desciption} dueDate={value.dueDate} isDone={value.isDone} key={index} />
            ))}
        </ul>

    )
}

export default TaskList;