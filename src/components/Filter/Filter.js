import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { findContact } from 'redux/contactsSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(findContact(event.currentTarget.value));
  };

  return (
    <>
      <p className={styles.label}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={styles.input}
      ></input>
    </>
  );
};

// const Filter = ({ value, onChange }) => {
//   return (
//     <>
//       <p className={styles.label}>Find contacts by name</p>
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         className={styles.input}
//       ></input>
//     </>
//   );
// };

// export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
