import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
    //handleDelete method
    const handleDelete = () => {
        deleteContact(filteredContact.id);
        Notify.success(
            `${filteredContact.name} was successfully deleted from your contacts!`,
            { position: 'center-top' }
        );
    };

    return (
        <li className={css.contactListItem}>
            <p>{filteredContact.name}:</p>
            <p>{filteredContact.number}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

ContactListItem.propTypes = {
    filteredContact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
};