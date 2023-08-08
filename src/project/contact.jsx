import React from 'react';

const Contact = ({ firstName, lastName, phone, gender }) => {
  return (
    <div className="contact">
      <div className={`gender ${gender}`}></div>
      <div>
        <p>Name: {`${firstName} ${lastName}`}</p>
        <p>Phone: {phone}</p>
        <div className={`gender-icon ${gender}`}>
          {gender === "male" ? "♂" : gender === "female" ? "♀" : "?"}
        </div>
      </div>
    </div>
  );
};


export default Contact;