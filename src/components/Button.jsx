import './Button.scss'

export default function Button({ kind = '', children, onClick}) {
    return (
        <button type="button" className={`button${kind}`} onClick={onClick}>{children}</button>
    )
}