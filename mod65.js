function sum(num){
	return function(secNum){
		return num+ secNum;
	}
}

sum(5)(5)