const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let products = [
  { id: '1', name: "Buku Tarot", stock: 30, harga: "800.000" },
  { id: '2', name: "Buku Tarots", stock: 2, harga: "900.000" }
];

// parse application/json
app.use(bodyParser.json());
 
//tampilkan semua product
app.get('/api/products',(req, res) => {
  res.send(JSON.stringify({"status": 200, "error": null, "response": products}));
});
 
//tampilkan product berdasarkan id
app.get('/api/products/:id',(req, res) => {
  objIndex = products.findIndex((obj => obj.id == req.params.id));

  if(objIndex != -1){
    res.send(JSON.stringify({"status": 200, "error": null, "response": products[req.params.id]}));
  }else{
    res.send(JSON.stringify({"status": 200, "error": null}));
  }
});

//Tambahkan product baru
app.post('/api/products',(req, res) => {
  let data = { id: products.length+1, name: req.body.name, stock: req.body.stock, harga: req.body.harga};
  products.push(data);
  res.send(JSON.stringify({"status": 200, "error": null, "response": products}));
});
 
//Edit product
app.put('/api/products/:id',(req, res) => {
    objIndex = products.findIndex((obj => obj.id == req.params.id));

    if(objIndex != -1){
      before = products[objIndex];
      products[req.params.id].name = req.body.name;
      products[req.params.id].stock = req.body.stock;
      products[req.params.id].harga = req.body.harga;
      res.send(JSON.stringify({"status": 200, "error": null, "before": before, "response": products[req.params.id]}));
    }else{
      res.send(JSON.stringify({"status": 200, "error": null}));
    }
});
 
//Delete product berdasarkan id
app.delete('/api/products/:id',(req, res) => {
  objIndex = products.findIndex((obj => obj.id == req.params.id));
  if(objIndex != -1){
      products.splice(req.params.id,1);
      res.send(JSON.stringify({"status": 200, "error": null, "response": products}));
    }else{
      res.send(JSON.stringify({"status": 200, "error": null}));
    }
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server start on port 3000...');
});