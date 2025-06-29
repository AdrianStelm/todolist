export default function Task({ title, description, dueDate, isDone, onClick }) {
    return (
        <li onClick={onClick}>
            <h1>{title}</h1>
            <p>{description}</p>
            <time>{dueDate}</time>
            <p>{isDone}</p>
        </li>
    )
}