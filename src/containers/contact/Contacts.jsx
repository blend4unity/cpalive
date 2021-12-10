import React from 'react';
import { useEffect, useState } from "react"
import NameinputField from "./NameinputField"
import PhoneinputField from "./PhoneinputField"
import TextareaField from "./Textarea";
import emailjs from 'emailjs-com';
import './contacts.css';


const Contacts = () => {
    const [values, setValues] = useState({
      fullName: '',
      email: '',
      tel: '',
      company: '',
      message: ''
    });
    const [status, setStatus] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send('service_qc7jgth', 'template_cy2ozgd', values, 'user_HTQPHEWB2nOCn84LCecyk')
        .then(response => {
          console.log('SUCCESS!', response);
          setValues({
            fullName: '',
            email: '',
            tel: '',
            company: '',
            message: ''
          });
          setStatus('SUCCESS');
        }, error => {
          console.log('FAILED...', error);
        });
    }
  
    useEffect(() => {
      if(status === 'SUCCESS') {
        setTimeout(() => {
          setStatus('');
        }, 3000);
      }
    }, [status]);
  
    const handleChange = (e) => {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }))
    }
return(
     
    <div className="gpt3__contacts-container section__padding" id="Contacts">
    
    <div className="contain">

<div className="wrapper">

  <div className="form">
  
    <h4>GET IN TOUCH</h4>
    <h2 className="form-headline">Send us a message</h2>
    
    
    <form id="submit-form" onSubmit={handleSubmit}>
   
      <p>
      <NameinputField value={values.fullName} handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe" required/>
      </p>
      <p>
        <NameinputField id="email" className="form-input" value={values.email} handleChange={handleChange} label='Email' type="email" name="email" required/>
        
      </p>
      <p>
      <NameinputField id="company-name" value={values.company} handleChange={handleChange} label="Company Name" name="company" type="text" required/>
      </p>
      <p>
        <PhoneinputField id="tel" className="form-input" value={values.tel} handleChange={handleChange} label='Phone Number' type="tel" name="tel" required/>
        
      </p>
      <p className="full-width">
        <TextareaField   id="message" label="Write your message" value={values.message} handleChange={handleChange} name ="message"placeholder="Your Message*" required />
        
      </p>
     {/*} <p className="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services.
</p>*/}
      <p className="full-width">
        <input type="submit" className="submit-btn" value="Submit" onclick="checkValidations()" />
        {/*<button className="reset-btn" onclick="reset()">Reset</button>*/}
      </p>
    </form>
    {status && renderAlert()}
  </div>

  <div className="contacts contact-wrapper">

    <ul>
      <li>We've driven online revenues of over <span className="highlight-text-grey">$2
          billion</span> for our clients. Ready to know
        how we can help you?</li>
      <span className="hightlight-contact-info">
        <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> info@linkwide.in</li>
        <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 8660804392</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
   
  </div>


);
}
const renderAlert = () => (
    <div className="alert-message">
      <p>Your message submitted successfully</p>
    </div>
  )
export default Contacts;