import { useState } from "react";

function Challenge1() {
  // state object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div style={{ maxWidth: 460, margin: "20px auto" }}>
      <h2>React Hooks - Challenge 1</h2>
      <h4>Form & Controlled Components</h4>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: 16, lineHeight: 1.8 }}>
        <div>Name: {formData.name || "-"}</div>
        <div>Email: {formData.email || "-"}</div>
        <div>Age: {formData.age || "-"}</div>
      </div>
    </div>
  );
}

export default Challenge1;
