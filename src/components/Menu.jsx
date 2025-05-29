import './Menu.scss'

export default function Menu({type = '', children}) {
    return (
        <aside className={`menu${type}`}>
            {children}
        </aside>
    )
}