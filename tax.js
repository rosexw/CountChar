/* w1d3
3. Objects - Advanced Practice 
Given the following data, implement a function that calculates the total sales and total tax, grouped by company.
Implement the function calculateSalesTax that returns the results below.
*/

 var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//adding two new functions - to calculate total sales and total tax separately

function calculateSales(salesArr) {
	  // What I want to do: add up the sales per companySalesData
  var total = 0;
  for (var i in salesArr) {
  	total += salesArr[i];
  }

  return total;
}
//console.log(calculateSales());

function calculateTax(salesArr, taxRate) {
	// find which region the sale was made in
	// multiply tax to total sale
	return calculateSales(salesArr)*taxRate;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  // console.log display both for each
  var output = {};

  for (var data of salesData){
  	if (!output.hasOwnProperty(data.name)) {
  		output[data.name] = {totalSales: 0, totalTaxes:0};
  	}

  	output[data.name].totalSales += calculateSales(data.sales);
  	output[data.name].totalTaxes += calculateTax(data.sales, salesTaxRates[data.province]);
  }

  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
