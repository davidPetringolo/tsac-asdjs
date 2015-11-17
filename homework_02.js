
function sumTillNeg(array){
    var i = 0;
    var array2 = new Array(array.length);
    array.every(function(x){        //per ogni elemento dell'array esegue la funzione specificata finchè ritorna true
        if(x > 0){
            array2[i] = x; 
            i++; 
            return true;
         } else return false;
      }
      )   
    return array2.reduce(function(acc, x){return acc + x;});
}

//Per Tiziano
function ex_1_F(array){
    var i = 0;
    var array2 = new Array(array.length);
    array.every(function(x){        //per ogni elemento dell'array esegue la funzione specificata finchè ritorna true
        if(x > 0){
            array2[i] = x; 
            i++; 
            return true;
         } else return false;
      }
      )   
    return array2.reduce(function(acc, x){return acc + x;});
}
//////////////////////////////////////////////////////////////////////

function sumFirst(n){
    var array = new Array(n);
    var  j = 1;
    for(var i = 0; i < n; i++){     //riempio l'array
        array[i] = j;
        j += 2;
    }
    return array.reduce(function(acc, x){return acc + x}, 0);
}

//Per Tiziano
function ex_2_F(n){
    var array = new Array(n);
    var  j = 1;
    for(var i = 0; i < n; i++){     //riempio l'array
        array[i] = j;
        j += 2;
    }
    return array.reduce(function(acc, x){return acc + x}, 0);
}

//////////////////////////////////////////////////////////////////////

function avrg(array){
     return array.reduce(function(acc, x){return acc + x}, 0) / array.length;  
}

//Per Tiziano
function ex_3_F(array){
     return array.reduce(function(acc, x){return acc + x}, 0) / array.length;  
}

//////////////////////////////////////////////////////////////////////

function inter(a, b){
    if(a > b){
        var c = a;
        a = b;
        b = c;
    }
    var array = new Array(b-a + 1);
    for(var i = 0; i < array.length; i++){
        array[i] = a + i;
    }
    var sum = array.reduce(function(acc, x){return acc + x}, 0);   //sommo
    return sum;

}

//Per Tiziano
function ex_4_F(a, b){
    if(a > b){
        var c = a;
        a = b;
        b = c;
    }
    var array = new Array(b-a + 1);
    for(var i = 0; i < array.length; i++){
        array[i] = a + i;
    }
    var sum = array.reduce(function(acc, x){return acc + x}, 0);   //sommo
    return sum;

}

//////////////////////////////////////////////////////////////////////

function mult(a, b){
    var array = new Array(b);
    for(var i = 0; i < b; i++){
        array[i] = a;  //riempio l'array con tutte 'a'
    }
    return array.reduce(function(acc, x){return acc + x});
}

//Per Tiziano
function ex_5_F(a, b){
    var array = new Array(b);
    for(var i = 0; i < b; i++){
        array[i] = a;  //riempio l'array con tutte 'a'
    }
    return array.reduce(function(acc, x){return acc + x});
}

//////////////////////////////////////////////////////////////////////

function pow(a, b){
    array = [];
    array[0] = a;
    while (b > 1){
        array[array.length] = array[array.length - 1] * a;
        b--;
    }
    return array[array.length - 1];
}

//Per Tiziano
function ex_7_F(a, b){
   array = [];
    array[0] = a;
    while (b > 1){
        array[array.length] = array[array.length - 1] * a;
        b--;
    }
    return array[array.length - 1]; 
}

//////////////////////////////////////////////////////////////////////

function matrix(a){
    var l = Math.sqrt(a.length);
    var mat = [[]]; 
    for(i = 0; i < l; i++){
        mat[i] = a.splice(0, l); //splice elimina dall'array originale l elementi creando un nuovo array con i medesimi
    }
    return mat;
}

//Per Tiziano 
function ex_8_F(a){
    var l = Math.sqrt(a.length);
    var mat = [[]]; 
    for(i = 0; i < l; i++){
        mat[i] = a.splice(0, l); //splice elimina dall'array originale l elementi creando un nuovo array con i medesimi
    }
    return mat;
}