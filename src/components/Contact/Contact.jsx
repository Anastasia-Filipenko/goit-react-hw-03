import css from '../Contact/Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
export default function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <div className={css.container}>
        <p>
          <IoMdContact className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
