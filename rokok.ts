let data = [
	{
	  id: 1,
	  name: 'Sampoerna',
	  tipe: 'Sampoerna Mild',
	  stock: 100,
	  price: 35000,
	},
	{
	  id: 2,
	  name: 'Surya gudang garam',
	  tipe: 'Surya Pro Mid',
	  stock: 16,
	  price: 25000,
	},
	{
	  id: 3,
	  name: 'ESSE',
	  TIPE: 'ESSE Berry POP',
	  stock: 2,
	  price: 29500,
	},
	{
	  id: 4,
	  name: 'LA light',
	  color: 'LA purple splash',
	  stock: 7,
	  price: 30000,
	},
  ];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan warna tertentu
//TODO 4 : dapatkan data dengan stok >= 100


// TODO 1 : Dapatkan semua data
console.log("Semua data dalam format tabel:");
console.table(data);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(tiperokok => tiperokok.name === name);
console.log("Data dengan nama Sampoerna:", getDataByName('Sampoerna'));

// TODO 3 : Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(tiperokok => tiperokok.price === price);
console.log("Data dengan harga 35.000:", getDataByPrice(35000));

// TODO 4 : Dapatkan data dengan stok >= 100
const getDataByStock = (stock) => data.filter(tiperokok => tiperokok.stock >= stock);
console.log("Data dengan stok >= 100:", getDataByStock(100));
