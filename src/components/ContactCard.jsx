import React from 'react';
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclosure from '../hooks/useDisclosure';

const ContactCard = ({ contact, deleteContact }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="bg-yellow flex justify-around p-2 rounded-lg mb-4">
        <HiOutlineUserCircle className="text-4xl text-orange" />

        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>

        <div className="flex text-3xl items-center">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash onClick={() => deleteContact(contact.id)} className='text-orange cursor-pointer' />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
