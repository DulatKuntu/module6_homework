function sum(num){
	return function(secNum){
		return num+ secNum;
	}
}

console.log(sum(5)(10));