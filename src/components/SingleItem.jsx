const SingleItem = ({ item, deleteItems, editItems }) => {
  const { id, name, completed } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItems(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
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
