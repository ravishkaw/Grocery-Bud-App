import SingleItem from "./SingleItem";

const Item = ({ items, deleteItems }) => {
  return (
    <section className="item-container">
      {items.map((item) => {
        return (
          <SingleItem key={item.id} item={item} deleteItems={deleteItems} />
        );
      })}
    </section>
  );
};
export default Item;
