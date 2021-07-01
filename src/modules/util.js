export const currency = n => {
	let regexp = /\B(?=(\d{3})+(?!\d))/g;
	return n.toString().replace(regexp, ',');
}
