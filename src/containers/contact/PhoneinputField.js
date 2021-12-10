import './contacts.css';



const PhoneinputField = (props) => {
    const { handleChange, label, name, type, value } = props;
    return (
      <div className="">
        <label className="input-heading" htmlFor={name}>{label}</label>
        <input className="input-type" type={type} onChange={handleChange} value={value} name={name} placeholder='+91 866080XXXX' required />
      </div>
    )
  }
  
  export default PhoneinputField