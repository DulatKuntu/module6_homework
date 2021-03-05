const intervalId = setInterval(function(start,end){
	for(let i = start; i <= end; i++){
		console.log(i)
	}
}, 1000,2,10);

setTimeout(function(){
	clearInterval(intervalId);
},2000);