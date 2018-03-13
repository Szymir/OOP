$(function(){
	var array = [
		{brand:"Samsung", price:"3250", color:"black"},
		{brand:"Apple", price:"3250", color:"black"},
		{brand:"Samsung", price:"3250", color:"black"}
	];

	function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
	}

	Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
	}

	for (var i = 0; i < array.length; i++){
		var tel = new Phone(array[i].brand, array[i].price, array[i].color);
		tel.printInfo();
	}
})