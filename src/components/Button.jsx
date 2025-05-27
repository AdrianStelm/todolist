import './Button.scss'

export default function Button({ type = '', children, onOpen}) {
    return (
        <button type="button" className={`button${type}`} onClick={onOpen}>{children}</button>
    )
}