import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Hamit',
      phone_number: '0555'
    },
    {
      fullname: 'Kerim',
      phone_number: '0111'
    },
    {
      fullname: 'Kemal',
      phone_number: '02222'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div id='container'>
        <h1>Contacts (Iletisim) </h1>
        < List contacts={contacts} />
        < Form setContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
