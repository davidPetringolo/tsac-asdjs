
//01 iterativo

function sumAll(a){
    somma = 0;
    for(i = 0; i < a.length; i++){
        if(a[i] < 0){
           return somma;
       }
        somma = somma + a[i];
    }
    return somma;
}

x = [1, 3, -4, 5];

sumAll(x);

//////////////////////////////////////////////////

//01 ricorsivo

function sumAllR(a){
        if(a.length == 0){
           return 0;
       }
        if (a[0] < 0){
            return 0;
        }else{
            return a[0] + sumAllR(a.slice(1));
        }
}

var a = [1,2,-3,4];

sumAllR(a);


/////////////////////////////////////////////////////

//02 iterativo

function sumNR(n){
    somma = 0;
    for(i = 0; i < (n*2); i++){
        if((i%2) != 0){
            somma = somma + i;
        } 
    }
    return somma;
}

n = 2;

sumAllD(n);

///////////////////////////////////////////////////////////////

//02 ricorsivo

function sumNR(n, i){
        if (n == 0){
            return 0;
        }
        else if(i % 2 == 0){
            return 1 + sumNR(n, i++);
        }
        else {
              return sumNR(n--, i++);
        }
}

sumNR(3,1);

////////////////////////////////////////////////////////////////

//03 iterativo

function media(n){
    m = 0;
    m = sumAll(n) / n.length;
    return m;
}

c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

media(c);

//////////////////////////////////////////////////////////////

//03 ricorsivo

function mediaR(n){
    return sumAllR(n) / n.length;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

////////////////////////////////////////////////////////////////

//04 iterativo

function intervallo(x,y){
    somma = 0;
    if(x > y){
        for (i = y; i <= x; i++){
            somma = somma + i;
        }
        return somma;
    }else {
        for (i = x; i <= y; i++){
            somma = somma + i;
        }
        return somma;
    }
}

intervallo(3, 5);

//////////////////////////////////////////////////////////////////

//04 ricorsivo

function intervalloR(x,y){
    somma = 0;
    if(x > y){
        return somma = somma + intervalloR(x, y+1);
    }else {
        return somma = somma + intervalloR(x+1, y);
    }
    if (x == y){
        return somma = somma + x;
    }
}

intervalloR(5,3);

/////////////////////////////////////////////////////////////////

//05 iterativo

function pr(x, y)			
{
	if((x >= 0) || (y >= 0))
	{
		var TR = 0;
		for(i = 0; i < y; i++)
		{
			TR = TR + x;
		}
	}
	return TR;
}

pr(5,4);

///////////////////////////////////////////////////////////////////

//06 iterativo

function div(a,b) {
	
		q = 0;
        r = 0;
		while(r + b < a) {
			
			r += b;
			q++;
		}
		
	console.log(q);
	console.log(a - r);
}

div(5,3);

//////////////////////////////////////////////////////////////////

//07 iterativo

function pow(x, y)
{
	if((x >= 0) || (y >= 0))
	{
		for(i = 0; i < y; i++)
		{
			x *= x;
		}
		return x;
	}
	else if(y == 0)
		return 1;
	else
		return 0;
}

pow(2,3);
