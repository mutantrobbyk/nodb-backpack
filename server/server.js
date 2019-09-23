const express = require("express");
const app = express();
const PORT = 3001;
// const backpackCtrl = require('./backpackCtrl')
const inventoryCtrl = require("./inventoryCtrl");

app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

app.get("/api/backpack-items", inventoryCtrl.getItems);
app.post("/api/backpack-items", inventoryCtrl.addItem);
app.put("/api/backpack-items/:id", inventoryCtrl.updateItem);
app.delete("/api/backpack-items/:id", inventoryCtrl.deleteItem);
app.get("/api/backpack-items/search", inventoryCtrl.searchItem);

app.listen(PORT, () => console.log(`${PORT}, a space oddity`));
