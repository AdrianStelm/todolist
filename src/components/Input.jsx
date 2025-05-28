import './Input.scss'

export default function Input({ kind='', type, value, onChange}) {
    return (
        <input type={`${type}`} className={`input${kind}`} value={value} onChange={onChange} />
    )
}