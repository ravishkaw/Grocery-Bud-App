import { useState } from "react";
import Form from "./components/Form";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Item from "./components/Item";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const deleteItems = (id) => {
    const newList = items.filter((item) => item.id != id);
    setItems(newList);
  };

  return (
    <main className="container">
      <h1 className="title">Grocery Bud</h1>
      <Form addItems={addItems} />
      <Item items={items} deleteItems={deleteItems} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        pauseOnHover={false}
      />
    </main>
  );
};
export default App;
