//esercizi mancanti (Iterativi): 8 
//esercizi mancanti (Ricorsivi): 5, 6, 8, 10, 11


//01 iterativo
/*Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.*/

function ex_01_I(a) {
    s = 0;
    for(i = 0; i < a.length; i++) {
        if(a[i] < 0) {
           return s;
       }
        s = s + a[i];
    }
    return s;
}

//////////////////////////////////////////////////

//01 ricorsivo
/*Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.*/
function ex_01_R(a) {
        if(a.length == 0) {
           return 0;
       }
        if (a[0] < 0) {
            return 0;
        }else {
            return a[0] + ex_01_R(a.slice(1));
        }
}

/////////////////////////////////////////////////////

//02 iterativo
//Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

function ex_02_I(n) {
    s = 0;
    for(i = 0; i < (n*2); i++) {
        if((i%2) != 0) {
            s = s + i;
        } 
    }
    return s;
}

///////////////////////////////////////////////////////////////

//02 ricorsivo
//Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

function ex_02_R(n, i) {
        
        if (n == 0) {
            return 0;
        }
        else if(i % 2 == 0) {
            	return 1 + ex_02_R(n, i++);
        }
        else {
              return ex_02_R(n--, i++);
        }
}

////////////////////////////////////////////////////////////////

//03 iterativo
//Dato un array di 10 elementi, calcolarne la media

function ex_03_I(n) {
    m = 0;
    m = ex_01_I(n) / n.length;
    return m;
}

//////////////////////////////////////////////////////////////

//03 ricorsivo
//Dato un array di 10 elementi, calcolarne la media

function ex_03_R(n){
    return ex_01_R(n) / n.length;
}

////////////////////////////////////////////////////////////////

//04 iterativo
/*Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all�interno dell�intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell�intervallo [b,a]*/

function ex_04_I(x, y) {
    s = 0;
    if(x > y) {
        for (i = y; i <= x; i++) {
            s = s + i;
        }
        return s;
    }else {
        for (i = x; i <= y; i++) {
            s = s + i;
        }
        return s;
    }
}

//////////////////////////////////////////////////////////////////

//04 ricorsivo
/*Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all�interno dell�intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell�intervallo [b,a]*/

function ex_04_R(x, y) {
    if(x > y) {
    	return 0;
    }
    if (x > y) {
    	return ex_04_R(y, x);
    }
}

/////////////////////////////////////////////////////////////////

//05 iterativo
//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l�utilizzo del solo operatore somma.
function ex_05_I(x, y) {
	if((x >= 0) || (y >= 0)) {
		TR = 0;
		for(i = 0; i < y; i++) {
			TR = TR + x;
		}
	}
	return TR;
}

///////////////////////////////////////////////////////////////////

//05 ricorsivo
//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l�utilizzo del solo operatore somma.

function ex_05_R(a, b) {
	if((a < 0) || (b <= 0))
	{
		return 0;
	}
	else {
		return a + ex_05_R(a, b - 1); 
	}
}
///////////////////////////////////////////////////////////////////

//06 iterativo
/*Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l�utilizzo dei soli operatori somma e sottrazione.*/

function ex_06_I(dividendo, divisore) { //5:3 1 2
	
		quoziente = 0;
        resto = 0;
		/*while(resto + divisore <= dividendo) {
			
			resto += divisore;
			quoziente++;
		}
		
		console.log('quozionete:' + quoziente);
		console.log('resto:' + (dividendo - resto));*/

		while(dividendo - divisore >= 0) {
			quoziente++;
			dividendo -= divisore;
			resto = dividendo;
		}
		console.log('quozionete:' + quoziente);
		console.log('resto:' +  (resto));
}

//////////////////////////////////////////////////////////////////

//06 ricorsivo
/*Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l�utilizzo dei soli operatori somma e sottrazione.*/

function ex_06_R(a, b) {
	if((a <= 0) || (a < b) ) {
		return 0;
	}
	else {
		return 1 + ex_06_R(a - b, b);
	}
}

//////////////////////////////////////////////////////////////////

//07 iterativo
/*Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l�utilizzo dei soli
operatori somma, sottrazione e della funzione mult.*/

function ex_07_I(x, y)
{
	if((x >= 0) || (y >= 0)) {
		pot = x;
		while(y > 1) {
			pot = ex_05_I(pot, x);
			y--;
		}
	return pot;
	}
}

//////////////////////////////////////////////////////////////////

//07 ricorsivo
/*Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l�utilizzo dei soli
operatori somma, sottrazione e della funzione mult.*/

function ex_07_R(x, y, z) {
	if(y == 1) {
		return z;
	} else {
		return ex_07_R(x, y-1, ex_05_I(x,z));
	}

}

//////////////////////////////////////////////////////////////////

//09 iterativo
//Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l�ordine degli elementi.

function ex_09_I(a) {
	b = [];
	j = 0;
	for(i = a.length - 1; i >= 0; i--) {
		b[j] = a[i];
		j++;
	}
	return b;
}

//////////////////////////////////////////////////////////////////

//09 ricorsivo
//Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l�ordine degli elementi.

function ex_09_R(a, b) {
	if(a.length == 0) {
		return b;
	} else {
		b[b.length] = a[a.length - 1];
		return ex_09_R(a.slice(0, a.length - 1), b);
	}
}

function FEx_09_R(a) {
	b = [];
	return ex_09_R(a, b);
}


//////////////////////////////////////////////////////////////////

//10 iterativo
//Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a.
function ex_10_I(x, y) {
	a = [];
	j = 0;
	for(i = 0; i < y; i++) {
		a[i] = x;
	}
	return a;
} 

//////////////////////////////////////////////////////////////////

//10 ricorsivo
//Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a.
function ex_10_R(x, y, a) {
	if((x < 0) || (y <= 0)) {
		return a;
	}
	else {
		a[a.length] = x;
		return ex_10_R(x, y-1, a);
	}
}

function Fex_10_R(x, y) {
	a = [];
	return ex_10_R(x, y, a);
}

//11 iterativo
/*Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.*/

function ex_11_I(a) {
	j = a.length;
	for(i = 0; i < j; i++) {
		if(a[i] % 2 != 0) {
			a[a.length] = a[i];
		}
	}
	for(i = 0; i < j; i++) {
		if(a[i] % 2 == 0) {
			a[a.length] = a[i];
		}	
	}
	return a.slice(j);
}