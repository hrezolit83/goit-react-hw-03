import "./App.css";
import { useState, useEffect } from "react";
import defaultContacts from "../../../contacts.json";
import ContactForm from "../contact-form/ContactForm";
import SearchBox from "../search-box/SearchBox";
import ContactList from "../contact-list/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem("save-contacts");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    } else {
      return defaultContacts;
    }
  });

  const [inputValue, setInputValue] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacs) => {
      return [...prevContacs, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacs) => {
      return prevContacs.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("save-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox inputValue={inputValue} handleChange={setInputValue} />
      <ContactList
        visibleContacts={visibleContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
