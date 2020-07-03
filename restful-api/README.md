# restfull-api
simple restfull api nodejs

# tampilkan semua product
(GET) /api/products

# tampilkan product berdasarkan ID
(GET) /api/products/:id

#Tambahkan product baru
(POST) /api/products

#Edit product
(PUT) /api/products/:id

#Delete product
(PUT) /api/products/:id

# sistem menggunakan array json
products = [
  { id: '1', name: "Buku Tarot", stock: 30, harga: "800.000" },
  { id: '2', name: "Buku Tarots", stock: 2, harga: "900.000" }
];

# pengiriman data menggunakan raw format
{
	"name": "...",
	"stock": "..",
	"harga": "..."
} 


