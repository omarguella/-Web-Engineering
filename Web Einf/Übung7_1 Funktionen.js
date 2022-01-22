    function identity(x){
        return x;
    }
    
    function identity_function(y){
        return(identity(y));
    }
console.log(identity_function(3));

function addf (x) {
 return function (y) {
 return x+y;
 }
}

function add(x,y) {
  return x+y;
}

function mul(x,y) {
 return x*y;
}

function applyf(f){
 return function(x){
return function(y){
return f(x,y);
 }
}
}

function curry(f, x){
 return function(y){
return f(x,y);
}
}


function curry(f, x){
return f(x,1) 
}
function methodize(f){
 return function(x){
 return f(this,x);
 }
}
Number.prototype.add = methodize(add); ^
console.log((3).add(4));


function demethodize(f) {
	return (function(x, y) {
		return f(x, y);
	});
}
Number.prototype.add = add;
console.log(demethodize(Number.prototype.add)(5, 6));




function twice(f) {
	return (function(x) {
		return f(x,x);
	});
}
var double = twice(add);
var square = twice(mul);
console.log(double(11));
console.log(square(11));




function twice(f) {
	return (function(x) {
		return f(x,x);
	});
}
var double = twice(add);
var square = twice(mul);

function composeu(d,s) {
	return (function(x) {
		return s(d(x));
	});
}
console.log(composeu(double, square)(3));



function composeb(f,m) {
	return (function(a, b, c) {
		return m(c, f(b, a));
	});
}
console.log(composeb(add, mul)(2, 3, 5));




function once(f) {
	var check = false;
	return function(a,b) {
		if(check) {
			return ("Fehlerabbruch ");
		} else {
		check=true;
		return f(a,b)
		}
	}
}

add_once = once(add);
console.log(add_once(3, 4));
console.log(add_once(3, 4));




function counterf(x) {
	return {
		inc: () => { return ++x; },
		dec: () => { return --x; }
	};
}

counter = counterf(10);

console.log(counter.inc());
console.log(counter.dec());



function revocable(f) {
	return {
		isRevok: false,
		invoke: (a) => {
			if(!this.isRevok) {
				f(a);
			} else {
				return ("Sie Müssen revoke machen");
			}
		},
		revoke: () => {
			this.isRevok = true;
		}
	};
}
temp = revocable(add);
temp.invoke(7); // führt zu alert(7);
temp.revoke();
console.log(temp.invoke(8));




 function add(x, y) {
 return x+y;
}
function mul(x, y) {
 return x*y;
}
function vector() {
let v=[];
	return {
		append:(x) => { v.push(x); },
		store: (index,x) => {v[index] = x;}, 
		get:(index) => { return vec[index]; }
	}
}

my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
console.log(my_vector.get(0));
console.log(my_vector.get(1));



