import React from "react";

const Items = (props) => {
  const { items, del } = props;
  let length = items.length;
  const ListItem = length ? (
    items
      .sort((a, b) => a.id - b.id)
      .map((item) => {
        return (
          <div key={item.id} className="item">
            <p>{item.product}</p>
            <p>{item.price}</p>
            <p>
              <button className="btn plus" onClick={(_) => props.plusQuantity(item)}>+</button>{" "}
              {item.quantity}{" "}
              <button className="btn minus" onClick={(_) => props.minusQuantity(item)}>-</button>
            </p>
            <p className="delete" onClick={() => del(item.id)}>
              &times;
            </p>
          </div>
        );
      })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>quantity </p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
