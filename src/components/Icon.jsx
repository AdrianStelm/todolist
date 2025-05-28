import './Icon.scss'

export default function Icon({ type, children, onClick }) {
    return (
        <span onClick={onClick} className={`${type}-icon`}>{children}</span>
    )
}