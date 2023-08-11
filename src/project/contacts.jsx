import React, { useState } from 'react';
import Contact from './contact';
import './styles.css'; 

const Contacts = ({ data }) => {
  const [contacts] = useState(data);
  const [search, setSearch] = useState('');
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);
  const [showUnknown, setShowUnknown] = useState(true);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'showMale') {
      setShowMale(checked);
    }
    if (name === 'showFemale') {
      setShowFemale(checked);
    }
    if (name === 'showUnknown') {
      setShowUnknown(checked);
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      (contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone.includes(search)) &&
      ((contact.gender === 'male' && showMale) ||
        (contact.gender === 'female' && showFemale) ||
        (contact.gender === 'unknown' && showUnknown))
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="showMale"
            checked={showMale}
            onChange={handleCheckboxChange}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            name="showFemale"
            checked={showFemale}
            onChange={handleCheckboxChange}
          />
          Female
        </label>
        <label>
          <input
            type="checkbox"
            name="showUnknown"
            checked={showUnknown}
            onChange={handleCheckboxChange}
          />
          Unknown
        </label>
      </div>
      {filteredContacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </div>
  );
};

export default Contacts;






