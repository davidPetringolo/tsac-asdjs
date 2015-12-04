
function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

///////////////////////////////////////////////////////////////////////

function srcNum(array) {
	if(array.length == 0)
		return 0;
	else 
		if(array[0] == 5070)
			return 1 + srcNum(array.slice(1));
		else 
			return srcNum(array.slice(1));
		
	
}

///////////////////////////////////////////////////////////////////////

function sumQPPSqrt(array) {
		var result = array.filter(function(x) { if((x % 2 == 0) && (x >= 0)) return x;}).map(function(x) { return x*x;}).reduce(function(acc, x) { return acc + x;});
		var sqrt = Math.sqrt(result);
		return sqrt;
}

////////////////////////////////////////////////////////////////////////

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function Bst() {
    this.root = null;
}

Bst.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        var left = currentNode.l;
        if(left == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode)
    } else {
        var right = currentNode.r;
        if(right == null) {
            currentNode.r = newNode;
        } else {
            this.addNode(currentNode.r, newNode);
        }
    }
}

Bst.prototype.add = function(item) {
    if (this.root == null)
        this.root = new Node(item, null, null);
    else {
        this.addNode(this.root, new Node(item, null,null));
    }
}

function cTree(myarray) {
	var cTree = new Bst();
	myarray.map(function(el) { cTree.add(el);});
	return src(cTree.root, 0);
}

function src(cTree, max) {
	if(cTree == null)
		return max;
	else {
		max = cTree.item;
		return src(cTree.r, max);
	}
	return src(cTree.root, 0);
}