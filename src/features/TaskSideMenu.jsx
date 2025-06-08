import Input from "../components/Input";
import Button from "../components/Button";
import Icon from "../components/Icon";

function TaskSideMenu({
  isOpen,
  isShifted,
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  newDueDate,
  setNewDueDate,
  onSave,
  onDelete,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div className={`menu_task${isShifted ? ' left-shifted' : ''}`}>
      <Icon type='burger_menu-task' onClick={onClose} />
      <div className="menu_task-info">
        <h2>Task:</h2>
        <Input
          type='text'
          kind='-edit_title'
          placeholder='Input a title'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className='input-edit_description'
          placeholder='Input a description'
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <p>Choose a due date</p>
        <Input
          type='date'
          kind='-edit_date'
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
      </div>
      <div className="menu_buttons">
        <Button kind='_save-changes' onClick={onSave}>Save changes</Button>
        <Button kind="_delete-task" onClick={onDelete}>Delete task</Button>
      </div>
    </div>
  );
}

export default TaskSideMenu;
