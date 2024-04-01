import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact obj={contact} deleteContact={deleteContact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
