// A simple maths library for beginners to use and contribute to. The aim is
// to try and keep this library as simple as possible and as open and friendly
// to other learners as possible.

// Basic Mathematic functions

function add(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  };
  return sum;
};

//Addition Closure
function addClosure(a){
	return function(b){
		return a + b;
	};
}

function subtraction(arr){
  var sum = arr[0];
  for(var i = 1; i < arr.length; i++){
    sum -= arr[i];
  };
  return sum;
};

//Subtraction Closure
function subClosure(a){
	return function(b){
		return a - b;
	};
}

function multiplication(arr){
  var sum = 1;
  for(var i = 0; i < arr.length; i++){
    sum *= arr[i];
  };
  return sum;
};

function division(a,b){
  return a/b;
};

//Basic Algebra

function square(a){
  return a * a;
};

function cube(a){
  return a * a * a;
}

function toThePower (a,b){
  var sum = 1;
  for(var i = 0; i < b; i++){
    sum *= a;
  };
  return sum;
}

//TODO create a nth root

function squareRoot(num){
	for(var i = 0; i < num/2; i++){
		if(i * i === num){
			return i;
		}
	}
}

function cubeRoot(num){
	for(var i = 0; i < num/2; i++){
		if(i*i*i === num){
			return i;
		}
	}
}


//Geometry

//Triangles

function pythagoras (a, b){
  var hypotenuse = square(a) + square(b);
  return squareRoot(hypotenuse);
}

function triangleArea(height, base){
	return height * base / 2;
}

// function sine (opp, hyp){
// 	var angle = (opp / hyp) * (Math.PI / 180);
// 	return Math.sin(angle) ;
// }

//Circles

function circleArea(radius){
	return Math.PI * square(radius);
}

function circleCircumfrence(radius){
	return 2 * Math.PI * radius;
}