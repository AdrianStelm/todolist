import Menu from "../components/Menu";
import TaskList from "../features/TaskList";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState} from "react";


function MainLayout() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [selectedIndex, setSelectedIndex] = useState(null);


    const handleSaveTask = () => {
        const updatedTask = {
            title,
            description,
            dueDate,
            isDone: false
        };
    
        let updatedTasks;
    
        if (selectedIndex !== null) {
            updatedTasks = [...tasks];
            updatedTasks[selectedIndex] = updatedTask;
        } else {
            updatedTasks = [...tasks, updatedTask];
        }
    
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    
        setTitle('');
        setDescription('');
        setDueDate('');
        setSelectedIndex(null);
    };
      

    const handleSelectTask = (task, index) => {
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
        setSelectedIndex(index);
    };

    return (
        <>
        {/* <Menu /> */}
        <TaskList 
                title={title} 
                setTitle={setTitle} 
                description={description} 
                setDescription={setDescription} 
                dueDate={dueDate} 
                setDueDate={setDueDate} 
                onSelectTask={handleSelectTask} 
                onSaveTask={handleSaveTask} 
                tasks={tasks}
                setTasks={setTasks}
                
        />
            <Menu type="_task">
                <h2>Task:</h2>
                <Input type='text' kind='-edit_title' placeholder='Input a title' value={title} onChange={(e) => setTitle(e.target.value)}></Input>
                <textarea className='input-edit_description'  placeholder='Input a description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <p>Choose a due date</p>
                <Button kind='_save-changes' onClick={handleSaveTask}>Save changes</Button>
                <Input type='date' kind='-edit_date' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></Input>

            </Menu>

            
        </>
    )
}

export default MainLayout