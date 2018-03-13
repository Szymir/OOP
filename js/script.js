$(function(){
	var array = [
		{brand:"Samsung", price:"3250", color:"black"},
		{brand:"Apple", price:"3250", color:"black"},
		{brand:"Samsung", price:"3250", color:"black"}
	];

	console.log(array);

	for (var i = 0; i < array.length; i++){
		console.log("The phone brand is " + array[i].brand + ", color is " + array[i].price + " and the price is " + array[i].color + ".");
	}
})