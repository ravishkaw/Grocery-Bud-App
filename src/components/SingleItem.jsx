import { useState } from "react";

const SingleItem = ({ item, deleteItems }) => {
  const { id, name, completed } = item;

  const [isChecked, setIsChecked] = useState(completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {name}
      </p>
      <button className="btn btn-del" onClick={() => deleteItems(id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
