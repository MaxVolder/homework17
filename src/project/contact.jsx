import React from 'react';

const Contact = ({ firstName, lastName, phone, gender }) => {
  return (
    <div className="contact">
      <div className="details">
        <div className={`gender-icon ${gender}`}>
          {gender === 'male' ? '♂' : '♀'}
        </div>
        <p>Name: {`${firstName} ${lastName}`}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default Contact;
