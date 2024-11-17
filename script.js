function toCase(text) {
   if(text.length<=0)return '-';

	let str=text.toLowerCase();
	str +='-';
	str +=text.toUpperCase();
	return str;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
