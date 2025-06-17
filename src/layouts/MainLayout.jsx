import TaskSideMenu from "../features/TaskSideMenu";
import SideMenu from "../features/SideMenu";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleUpdateTask = () => {
    const updatedTask = {
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      isDone: false
    };

    let updatedTasks = [...tasks];
    if (selectedIndex !== null) {
      updatedTasks[selectedIndex] = updatedTask;
    } else {
      updatedTasks.push(updatedTask);
    }

    setTasks(updatedTasks);
    setTitle('');
    setDescription('');
    setDueDate('');
    setSelectedIndex(null);
    setOpenTaskMenu(false);
  };

 const handleSaveTask = () => {
    const updatedTask = {
      title,
      description,
      dueDate,
      isDone: false
    };

    let updatedTasks = [...tasks];
    if (selectedIndex !== null) {
      updatedTasks[selectedIndex] = updatedTask;
    } else {
      updatedTasks.push(updatedTask);
    }

    setTasks(updatedTasks);
    setTitle('');
    setDescription('');
    setDueDate('');
    setSelectedIndex(null);
    setOpenTaskMenu(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setSelectedIndex(null);
    setNewTitle('');
    setNewDescription('');
    setNewDueDate('');
    setOpenTaskMenu(false);
  };

  const handleSelectTask = (task, index) => {
    setNewTitle(task.title);
    setNewDescription(task.description);
    setNewDueDate(task.dueDate);
    setSelectedIndex(index);
    setOpenTaskMenu(true);
  };

  return (
    <>
     <SideMenu isOpen={isOpenMenu} toggle={() => setOpenMenu(!isOpenMenu)} />
      <Outlet context={{
        title, setTitle,
        description, setDescription,
        dueDate, setDueDate,
        tasks, setTasks,
        onSelectTask: handleSelectTask,
        onSaveTask: handleSaveTask,
        isShifted: isOpenMenu
      }} />

      <TaskSideMenu
        isOpen={isOpenTaskMenu}
        isShifted={isOpenMenu}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newDueDate={newDueDate}
        setNewDueDate={setNewDueDate}
        onSave={handleUpdateTask}
        onDelete={() => deleteTask(selectedIndex)}
        onClose={() => setOpenTaskMenu(false)}
      />
    </>
  );
}

export default MainLayout;
