import React from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/Contact";
import { Contact } from "../../models/contact.class";

const ContactList = () => {
  const ContactExample = new Contact(
    "Alexis",
    "Brunetti",
    "Alexbrunetti12@gmail.com",
    true
  );

  return (
    <div>
      <ContactComponent Contact={ContactExample} />
    </div>
  );
};

ContactList.propTypes = {};

export default ContactList;
