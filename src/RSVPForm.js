import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age: "",
    newMember: false,
    comment: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label htmlFor="age">
        How old are you?
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option value="">Prefer not to say</option>
          <option value="0-19">0-19</option>
          <option value="20-39">20-39</option>
          <option value="40-59">40-59</option>
          <option value="60+">60+</option>
        </select>
      </label>      
      <br />
      <label htmlFor="newMember">
        Receive email notifications?
        <input
          id="newMember"
          type="checkbox"
          name="newMember"
          onChange={handleChange}
          checked={formData.newMember}
          value="newMember"
        />
      </label>
      <br />
      <label htmlFor="comment">
        Enter Your comment:
        <input
          id="comment"
          type="text"
          name="comment"
          onChange={handleChange}
          value={formData.comment}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RSVPForm;
