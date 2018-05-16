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

function subtraction(arr){
  var sum = arr[0];
  for(var i = 1; i < arr.length; i++){
    sum -= arr[i];
  };
  return sum;
};


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

//TODO create a squareRoot function, cubeRoot function, nth root

//TODO create a quadratic equation solver?? How would that look and work

//Geometry

function pythagoras (a, b){
  var hypotenuse = square(a) + square(b);
  return Math.sqrt(hypotenuse);
}
