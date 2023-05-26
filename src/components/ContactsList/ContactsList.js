import styles from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.item}>
            <span className={styles.name}>{name}:</span>{' '}
            <span className={styles.number}>{number}</span>
            <button
              type="button"
              id={id}
              onClick={() => dispatch(deleteContact(id))}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={styles.list}>
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <li key={id} className={styles.item}>
//             <span className={styles.name}>{name}:</span>{' '}
//             <span className={styles.number}>{number}</span>
//             <button
//               type="button"
//               id={id}
//               onClick={() => {
//                 onDeleteContact(id);
//               }}
//               className={styles.button}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
