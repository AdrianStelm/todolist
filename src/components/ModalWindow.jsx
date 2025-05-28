import './ModalWindow.scss'
import Input from './Input'
import Button from './Button'

export default function ModalWindow({onClose, title, setTitle, description, setDescription, dueDate, setDueDate, onSave}) {
    return (
        <dialog className="modal-window">
            <div className="modal-content">
                <span className='close-icon' onClick={onClose}>&times;</span>
                <Input type='text' kind='_title' value={title} onChange={(e) => setTitle(e.target.value)} ></Input>
                <Input type='text' kind='_description' value={description} onChange={(e) => setDescription(e.target.value)}></Input>
                <Input type='date' kind='_date' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></Input>
                <Button type='_save-changes' onClick={onSave}>Save changes</Button>
            </div>
        </dialog>
    )
}