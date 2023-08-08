import React, { Component } from 'react';
import Contact from './contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
      },
      {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
      },
      {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        gender: "unknown", // Тут ви можете використовувати "unknown" або інше значення
      },
      {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
      },
      {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
      },
      {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male",
      },
    ],
    search: '',
    showMale: true,
    showFemale: true,
    showUnknown: true,
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    const { contacts, search, showMale, showFemale, showUnknown } = this.state;
    const filteredContacts = contacts.filter(
      (contact) =>
        (contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone.includes(search)) &&
        (contact.gender === "male" && showMale) ||
        (contact.gender === "female" && showFemale) ||
        (contact.gender === "unknown" && showUnknown)
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={this.handleSearchChange}
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="showMale"
              checked={showMale}
              onChange={this.handleCheckboxChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="checkbox"
              name="showFemale"
              checked={showFemale}
              onChange={this.handleCheckboxChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="checkbox"
              name="showUnknown"
              checked={showUnknown}
              onChange={this.handleCheckboxChange}
            />{" "}
            Unknown
          </label>
        </div>
        {filteredContacts.map((contact, index) => (
          <Contact key={index} {...contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;