const power = (num,power) =>{
	let result = num
	if(power==0){
		return 1;
	}
	for(let i = 1;i < power;i++){
		result = result*num;
	}
	return result;
}

console.log(power(-2,3));
console.log(power(-2,0));
