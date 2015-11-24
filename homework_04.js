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

function rpn(s)
{
    var NumStack = new Stack();
    var firstOp = true;
    s = s.split(" ");						// splitta in base allo spazio " "
    
	for(var i = 0; i < s.length; i++) {
        if(s[i] == "+" || s[i] == "-" || s[i] == "*" || s[i] == "/") {
            if(firstOp) {
                firstOp=false;
            }
            switch(s[i]) {
                case "+": var n1 = NumStack.pop(); 
						  var n2 = NumStack.pop(); 
						  NumStack.push(n1+n2);
						break;
                case "-": var n1 = NumStack.pop(); 
						  var n2 = NumStack.pop(); 
						  NumStack.push(n1-n2);
						break;
                case "*": var n1 = NumStack.pop(); 
						  var n2 = NumStack.pop(); 
						  NumStack.push(n1*n2);
						break;
                case "/": var n1 = NumStack.pop(); 
						  var n2 = NumStack.pop(); 
						  NumStack.push(n1/n2);
						break;
            }
        } else {
            NumStack.push(parseInt(s[i]));  //numeri "stringa" castati in interi
        }
    }
    return NumStack.pop();
}
