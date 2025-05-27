import './ModalWindow.scss'

export default function ModalWindow({onClose}) {
    return (
        <dialog className="modal-window">
            <div className="modal-content">
                <span className='close-icon' onClick={onClose}>&times;</span>
                <h1>blalbal</h1>
                <p>asdasd</p>
            </div>
        </dialog>
    )
}