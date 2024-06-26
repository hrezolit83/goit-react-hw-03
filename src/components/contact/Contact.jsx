import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

const Contact = ({ obj, deleteContact }) => {
  return (
    <div>
      <p>
        <FaUser className={css.icon} />
        {obj.name}
      </p>

      <p>
        <FaPhone className={css.icon} />
        {obj.number}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => deleteContact(obj.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
