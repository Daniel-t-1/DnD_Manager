import React from "react";
import "./Inventory.css";

// Item is :
//     "name": "TinderBox",
//     "Description": "",
//     "value": "0gp",
//     "weight": 0,
//     "quantity": 1

export function Inventory({ items, updateSheetData }) {
  const [CharacterSheetInventoryItems, setCharacterSheetInventoryItems] =
    React.useState(items);

  function updateInventoryItem(id, key, value) {
    const newState = [...CharacterSheetInventoryItems];
    const splitPath = key.split(".");
    let currentObject = newState[id];

    for (let i = 0; i < splitPath.length; i++) {
      if (i === splitPath.length - 1) {
        currentObject[splitPath[i]] = value;
      } else {
        currentObject = currentObject[splitPath[i]];
      }
    }

    setCharacterSheetInventoryItems(newState);
    updateSheetData("Equipment.Items", newState);
  }

  function addInventoryItem(item) {
    const newState = [...CharacterSheetInventoryItems];
    newState.push(item);
    setCharacterSheetInventoryItems(newState);
    updateSheetData("Equipment.Items", newState);
  }

  function removeIventoryItem(id) {
    const newState = [...CharacterSheetInventoryItems];
    newState.splice(id, 1);
    setCharacterSheetInventoryItems(newState);
    updateSheetData("Equipment.Items", newState);
  }

  return (
    <div className="inventory-items">
      <div className="inventory">
        <div className="inventory-header">
          <h3>Inventory</h3>
        </div>
        <InventoryItems
          items={items}
          updateInventoryItem={updateInventoryItem}
          removeIventoryItem={removeIventoryItem}
        ></InventoryItems>
        <NewItemrow addInventoryItem={addInventoryItem} />
      </div>
    </div>
  );
}

function InventoryItem({ item, id, updateInventoryItem, removeIventoryItem }) {
  return (
    <>
      <div>
        <div className="item-labels">
          <input
            type="number"
            defaultValue={item.quantity}
            className="inventory-item-quantity"
            onChange={(e) =>
              updateInventoryItem(id, "quantity", e.target.value)
            }
            min="0"
            max="200"
          />
          x
          <input
            defaultValue={item.name}
            onChange={(e) => updateInventoryItem(id, "name", e.target.value)}
            className="inventory-item-name"
          />
          <div
            className="remove-button"
            onClick={() => removeIventoryItem(id)}
            tabIndex={0}
          >
            -
          </div>
        </div>
      </div>
    </>
  );
}

export function InventoryItems({
  items,
  updateInventoryItem,
  removeIventoryItem,
}) {
  const [expandedItem, setExpandedItem] = React.useState(-1);

  const handleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(-1);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <InventoryItem
          key={index}
          id={index}
          item={item}
          expandedItem={expandedItem}
          handleExpand={handleExpand}
          removeIventoryItem={removeIventoryItem}
          updateInventoryItem={updateInventoryItem}
        />
      ))}
    </div>
  );
}

function NewItemrow({ addInventoryItem }) {
  const [item, setItem] = React.useState({
    name: "",
    description: "",
    quantity: 1,
  });

  function addNewItem() {
    addInventoryItem(item);
    setItem({
      name: "",
      description: "",
      quantity: 1,
    });
  }

  return (
    <div>
      <div className="item-labels">
        <input
          type="number"
          defaultValue={item.quantity}
          className="inventory-item-quantity"
          min="0"
          max="200"
          onChange={(e) => setItem({ ...item, quantity: e.target.value })}
        />
        x
        <input
          defaultValue={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          className="inventory-item-name"
        />
        <div
          className="add-button"
          onClick={addNewItem}
          tabIndex={0}
          onKeyPress={(event) => event.key === "Enter" && addNewItem}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Inventory;
