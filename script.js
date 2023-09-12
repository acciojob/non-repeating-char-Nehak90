function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i= 0; i < str.length()-1; i++) {
		for (let j = i+1; j < str.length(); j++) {
			if (str.charAt(i)!=str.charAt(j)) {
				console.log(str.charAt(i));
			} else{
				console.log(null);
			}
		}
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
