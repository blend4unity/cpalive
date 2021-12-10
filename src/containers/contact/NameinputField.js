import './contacts.css';



const NameinputField = (props) => {
    const { handleChange, label, name, type, value } = props;
    return (
      <div className="">
        <label className="input-heading" htmlFor={name}>{label}</label>
        <input className="input-type" type={type} onChange={handleChange} value={value} name={name} required />
      </div>
    )
  }
  
  export default NameinputField