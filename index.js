import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [name, setName] = useLocalStorage("username", ""); // збережемо під ключем "username"

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 useLocalStorage Hook</h1>
      <label>
        Введіть ім'я:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "6px", marginLeft: "10px" }}
        />
      </label>

      <p style={{ marginTop: "15px" }}>Збережене ім'я: <b>{name}</b></p>
      <p>(Спробуйте оновити сторінку — значення залишиться 👌)</p>
    </div>
  );
}

export default App;
