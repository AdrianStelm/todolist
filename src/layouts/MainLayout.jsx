import Menu from "../components/Menu";
import TaskList from "../features/TaskList";
import Input from "../components/Input";
import Button from "../components/Button";
import Icon from '../components/Icon';
import { useState, useEffect} from "react";


function MainLayout() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [isOpenTaskMenu, setOpenTaskMenu] = useState(false);
    const [isOpenMenu, setOpenMenu] = useState(true);  


    const closeTaskMenu = () => {
        setOpenTaskMenu(false)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }

    const openMenu = () => {
        setOpenMenu(true)
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const handleSaveTask = () => {
        const updatedTask = {
            title:newTitle,
            description:newDescription,
            dueDate:newDueDate,
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
    
        setTitle('');
        setDescription('');
        setDueDate('');
        setSelectedIndex(null);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
        setSelectedIndex(null)
        setDescription('');
        setDueDate('');
    }
      

    const handleSelectTask = (task, index) => {
        setNewTitle(task.title);
        setNewDescription(task.description);
        setNewDueDate(task.dueDate);
        setSelectedIndex(index);
        setOpenTaskMenu(true);
    };

    return (
        <>
        { isOpenMenu ? <Menu><Icon type='burger_menu' onClick={ isOpenMenu ? closeMenu : openMenu}></Icon></Menu> : <Menu type="-hidden"><Icon type='burger_menu' onClick={ isOpenMenu ? closeMenu : openMenu}></Icon></Menu>} 
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
                isShifted={isOpenMenu}
                
        /> 
        {isOpenTaskMenu ? <Menu type={`_task ${isOpenMenu ? ' left-shifted' : ''}`}>
                <Icon type='burger_menu-task' onClick={closeTaskMenu}></Icon>  
                <div className="menu_task-info">
                <h2>Task:</h2>
                <Input type='text' kind='-edit_title' placeholder='Input a title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></Input>
                <textarea className='input-edit_description'  placeholder='Input a description' value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></textarea>
                <p>Choose a due date</p>
                <Input type='date' kind='-edit_date' value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)}></Input>
                </div>
                <div className="menu_buttons">
                <Button kind='_save-changes' onClick={handleSaveTask}>Save changes</Button>
                <Button kind="_delete-task" onClick={() => deleteTask(selectedIndex)}>Delete task</Button>
                </div>
            </Menu> :null}


            
        </>
    )
}

export default MainLayout