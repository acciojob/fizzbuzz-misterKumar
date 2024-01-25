//your JS code here. If required.
let str="";
for(let i=0;i<=20;i++){
	
		if(i%5==0&&i%3==0){
		str+="FizzBuzz \n";
	}
else	if (i%5==0) {
		str+="Buzz \n";
	}
else	if (i%3==0) {
		str+="Fizz \n";
	}
else {
	str+=i+"\n";
}

}
alert(str);