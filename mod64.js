function isPrime(num){
	if(num<1000){
		if(num==0||num==1){
			return false;
		}
		for(let i=2;i<num/2;i++){
			if(num%i==0){
				return false;
			}
		}
		return true;
	}
	console.log("Enter number smaller than 100");
	return false;
}
console.log(isPrime(10))
console.log(isPrime(11))
console.log(isPrime(1))
console.log(isPrime(10001))
