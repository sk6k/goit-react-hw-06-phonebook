import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.classname}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
