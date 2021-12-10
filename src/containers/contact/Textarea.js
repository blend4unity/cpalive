import './contacts.css';

const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
        <label className="texarea-heading" htmlFor={name}>{label}</label>
        <textarea onChange={handleChange} name={name} rows="4" value={value} placeholder='Write your message here.....'></textarea>
      </div>
    )
  }
  
  export default TextareaField