import Task from "./Task";
import Button from "../components/Button";
import { useState } from "react";
import ModalWindow from "../components/ModalWindow";


function TaskList() {
    const [isOpen, setOpen] = useState(false); 
    const [title, setTitle] = useState('');
    const [desciption, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const openWindow = () => {
        setOpen(true)
    }

    const closeWindow = () => {
        setOpen(false)
    }

    function createTask(title, description, dueDate) {
        return {
          title,
          description,
          dueDate,
          isDone: false
        };
    }

    function saveTask(){
        const task = createTask(title, desciption, dueDate);
        const updatedTasks = [...existingTasks, task];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTitle('')
        setDescription('')
        setDueDate('')
        closeWindow()
    }
      

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    return (
        <ul>
            <Button kind="_create-task" onClick={openWindow}> <span className="icon"></span>Add New Task</Button>
            {isOpen ? <ModalWindow onClose={closeWindow} title={title} setTitle={setTitle} desciption={desciption} setDescription={setDescription} dueDate={dueDate} setDueDate={setDueDate} onSave={saveTask}/> : null}
            {existingTasks.map((value, index) => (
                <Task title={value.title} description={value.description} dueDate={value.dueDate} isDone={value.isDone} key={index} />
            ))}
        </ul>

    )
}

export default TaskList;