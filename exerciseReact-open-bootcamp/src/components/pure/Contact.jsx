import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ Contact }) => {
  return <div>
    <h1>User</h1>
    <h2>Name: {Contact.name}</h2>
    <h2>Surname: {Contact.surname}</h2>
    <h2>Email: {Contact.email}</h2>
    <h2>Status: {Contact.conected? 'Contact Online':'Contact Offline'}</h2>
  </div>;
};

ContactComponent.propTypes = {
  ContactComponent: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
