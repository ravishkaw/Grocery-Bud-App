import { useState } from "react";
import Form from "./components/Form";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Item from "./components/Item";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = JSON.parse(localStorage.getItem("list")) || [];

const App = () => {
  const [items, setItems] = useState(getLocalStorage);

  const addItems = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const deleteItems = (id) => {
    const newList = items.filter((item) => item.id != id);
    setItems(newList);
    setLocalStorage(newList);
  };

  const editItems = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className="container">
      <h1 className="title">Grocery Bud</h1>
      <Form addItems={addItems} />
      <Item items={items} deleteItems={deleteItems} editItems={editItems} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        pauseOnHover={false}
      />
    </main>
  );
};
export default App;
