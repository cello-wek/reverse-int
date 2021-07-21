module.exports = function reverse(numb) {
	console.log(`Number is ${numb}`);
	const sign = Math.sign(numb);
	numb = Math.abs(numb);
	let reversed = '';
	while (numb) {
		reversed += String(numb % 10);
		numb = Math.floor(numb / 10);
	}
	console.log(`Reversed number is ${reversed}`);
	return reversed;
}
