import './Input.scss'

export default function Input({ kind='', type, value, onChange, placeholder, minDate}) {
    return (
        <input min={minDate} type={`${type}`} className={`input${kind}`} value={value} onChange={onChange} placeholder={placeholder} />
    )
}