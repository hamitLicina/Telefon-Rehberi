import {useState} from 'react'
import './../styles.css';

function Form({setContacts, contacts }) {

  const [form, setForm] = useState({fullname: "", phone_number: ""});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }
    setContacts([...contacts, form])

    setForm({ fullname: '', phone_number: ''});
    
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullname' type="text" placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
      </div>
      <div>
        <input name='phone_number' type="text" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
      </div>
      <div className='btn'>
        <button onClick={onSubmit}>Add</button>
      </div>
    </form>
  );
}

export default Form