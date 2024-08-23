import SingleItem from "./SingleItem";

const Item = ({ items, deleteItems, editItems }) => {
  return (
    <section className="item-container">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            deleteItems={deleteItems}
            editItems={editItems}
          />
        );
      })}
    </section>
  );
};
export default Item;
