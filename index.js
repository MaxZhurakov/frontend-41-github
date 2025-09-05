import React, { useState, useCallback, useRef } from "react";

function App() 
  // ---------- Завдання 1: UserList + React.memo + useCallback ----------
  const [likes, setLikes] = useState(0);

  const users = [
    { id: 1, name: "Андрій", age: 25 },
    { id: 2, name: "Марія", age: 30 },
    { id: 3, name: "Іван", age: 22 },
  ];

  const handleUserClick = useCallback((id) => {
    console.log("Клік по користувачу з id:", id);
  }, []);

  const UserItem = React.memo(({ user }) => {
    console.log("Рендер UserItem:", user.name);
    return (
      <li
        style={{ cursor: "pointer", marginBottom: "6px" }}
        onClick={() => handleUserClick(user.id)}
      >
        {user.name} ({user.age} років)
      </li>
    );
  });

export default App;
