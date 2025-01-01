import { Navbar } from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclosure";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    getContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />

        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="ml-1 absolute text-white text-3xl" />
            <input
              type="text"
              className="bg-transparent border-white rounded-md border h-10 flex-grow text-white pl-9"
            />
          </div>
          <div>
            <AiFillPlusCircle onClick={onOpen}
              className="text-5xl cursor-pointer text-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-4"> {/* Reduced gap from 4 to 2 */}
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} deleteContact={deleteContact} />
          ))}
        </div>
      </div>

      <AddAndUpdateContact onClose={onClose} isOpen={open} />
    </>
  );
};

export default App;
