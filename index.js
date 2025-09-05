import React, { useState } from "react";

function MoodCard({ mood, comment }) {
  let bgColor;

  switch (mood) {
    case "😊":
      bgColor = "lightgreen";
      break;
    case "😐":
      bgColor = "lightgray";
      break;
    case "😞":
      bgColor = "lightcoral";
      break;
    default:
      bgColor = "#f0f0f0";
  }

  const cardStyle = {
    backgroundColor: bgColor,
    padding: "16px",
    borderRadius: "8px",
    marginTop: "20px",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h2>
        Ваш настрій сьогодні: {mood || "❓ Настрій не вказано"}
      </h2>
      {comment && <p>Коментар: "{comment}"</p>}
    </div>
  );
}

// Головний компонент
function App() {
  const [mood, setMood] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>🌤 Mood Tracker</h1>

      <div>
        <p>Обери настрій:</p>
        <button onClick={() => setMood("😊")}>😊</button>
        <button onClick={() => setMood("😐")}>😐</button>
        <button onClick={() => setMood("😞")}>😞</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Що вплинуло на твій настрій?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
        />
      </div>

      <MoodCard mood={mood} comment={comment} />
    </div>
  );
}

export default App;
