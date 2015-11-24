/*
STACKS
-PUSH: mette l'elemento in cima;
-PULL: tolgo l'elemento in cima;
-PEEK: restituisce l'elemento in cima, senza toglierlo;
-isEmpty: controlla se la pila ? vuota (true) o no (false);
*/

function Stack() {
	this.myarray = [];
}

Stack.prototype.push = function(e) {
	this.myarray.push(e);
}

Stack.prototype.pop = function() {
	return this.myarray.pop();
}

Stack.prototype.peek = function() {
	return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
	return this.myarray.length == 0;
}

Stack.prototype.reverse = function() {
	return this.myarray.reverse;
}

Stack.prototype.toString = function() {
	return this.myarray.toString;
}

function dec2bin(el) {
	function rec(stack, n){
		if(n == 0) {
			return stack;
		} 
		else {
			stack.push(n % 2);
			return rec(stack, Math.floor(n / 2));
		}
	}
	return rec(new Stack(), el).reverse().toString();
}
