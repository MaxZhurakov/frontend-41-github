import React, { useState, useEffect } from "react";

function UserSurveyForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "Чоловік",
    usedReact: false,
  });

  const [changeCount, setChangeCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formData.age !== "" || formData.gender !== "Чоловік" || formData.usedReact !== false) {
      setChangeCount((prev) => prev + 1);
    }
  }, [formData.age, formData.gender, formData.usedReact]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>📋 Опитування користувача</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Вік:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            Стать:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            >
              <option>Чоловік</option>
              <option>Жінка</option>
              <option>Інше</option>
            </select>
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            <input
              type="checkbox"
              name="usedReact"
              checked={formData.usedReact}
              onChange={handleChange}
            />{" "}
            Чи користувався React раніше?
          </label>
        </div>

        <button
          type="submit"
          style={{ marginTop: "15px", padding: "8px 12px", cursor: "pointer" }}
        >
          Надіслати
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Кількість змін у формі: {changeCount}
      </p>
      {changeCount > 10 && <p>😄 Та ти не можеш визначитися!</p>}
      {submitted && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>✅ Підсумок:</h3>
          <p>
            Вам {formData.age || "N/A"} років, ви обрали стать: {formData.gender}, і
            вже користувались React: {formData.usedReact ? "Так" : "Ні"}.
          </p>
        </div>
      )}
    </div>
  );
}

export default UserSurveyForm;
