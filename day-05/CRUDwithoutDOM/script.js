let items = [];

function createItem(newItem) {
    items.push(newItem);
    console.log("item added: " + newItem);
}

function readItems() {
    console.log("Items List:");
        items.forEach((item, index) => {
            console.log("item: " + item);
        });
}
console.log("---------------------");

function updateItem(index, updatedItem) {
    if (index >= 0 && index < items.length) {
        var oldItem = items[index];
        items[index] = updatedItem;
        console.log("list updated: " + oldItem + " => " + updatedItem);
    } else {
        console.log("index: " + index + " not found!");
    }
}

function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        var removedItem = items.splice(index, 1);
        console.log("deleted item: " + removedItem[0]);
    } else {
        console.log("index: " + index + " not found!");
    }
}

createItem("pencil");
createItem("notebook");
createItem("bag");
readItems(); 
updateItem(1, "book"); 
readItems(); 
deleteItem(0); 
readItems();