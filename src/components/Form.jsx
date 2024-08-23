import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = ({ addItems }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      return toast.error("No item provided!");
    }
    toast.success("Item added successfully!");
    addItems(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button className="btn btn-add">Add Item</button>
    </form>
  );
};
export default Form;
