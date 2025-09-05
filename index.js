import React from "react";
import PropTypes from "prop-types";

// 1 
function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
      <h3>{user.name}</h3>
      <p>Вік: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

//2 
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

//3 
function ListOrSingle({ data }) {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>Одне значення: {data.value}</p>;
}

ListOrSingle.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

//4 
function AtLeastOne({ items }) {
  return (
    <div>
      <h4>Items:</h4>
      <ul>
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

AtLeastOne.propTypes = {
  items: (props, propName, componentName) => {
    const value = props[propName];
    if (!Array.isArray(value)) {
      return new Error(`${componentName}: ${propName} має бути масивом`);
    }
    if (value.length === 0) {
      return new Error(`${componentName}: масив ${propName} не може бути порожнім`);
    }
    return null;
  },
};

//5 
function Product({ product }) {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "5px" }}>
      <h3>{product.title}</h3>
      <p>Ціна: {product.price} грн</p>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value !== "number") {
        return new Error(`${componentName}: ${propName} має бути числом`);
      }
      if (value <= 0) {
        return new Error(`${componentName}: ${propName} має бути більше 0`);
      }
      return null;
    },
  }).isRequired,
};
