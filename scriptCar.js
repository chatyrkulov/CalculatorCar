let price = document.getElementById('price');
let fee = document.getElementById('fee');
let limit = document.getElementById('limit');
let selec = document.getElementById('selected');
let sum = document.getElementById('sum');
let mo = document.getElementById('month');
let btn = document.getElementById('btn');
	

	fee.readOnly = true;
	limit.readOnly = true;

function sumCar(){
	let c = Number(price.value) + Number(price.value / 100 * selec.value);
	sum.innerHTML = Math.round(c);
	fee.readOnly = false;
	limit.readOnly = false;
}

function monthPrice(){
	let c = Number(price.value) + Number(price.value / 100 * selec.value);
	let m = (c - fee.value) / limit.value;
	mo.innerHTML = Math.round(m); 
}

	


btnClose.addEventListener('click', function(){
	exampleModal.style.display = 'none';
	exampleModal.style.opacity = '0';
})

btn.addEventListener('click', function(){
		exampleModal.style.display = 'block';
		exampleModal.style.opacity = '1';
		

})