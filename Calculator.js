var input = document.querySelector('#data');

function Clear(){
    input.value = '';
}
function data(num) {
    input.value += num;
}

function Calculate(){
    var result = eval(input.value);
    input.value = result;
}

function Absolute(){
    var Abs = input.value * (-1);
    input.value = Abs;
}
function Percent(){
    input.value = input.value / 100;
}

function Pow(){
    var Pow = Math.pow(input.value,2);
    input.value = Pow;
}

function  Sqrt(){
    var Sqrt = Math.sqrt(input.value);
    input.value = Sqrt;
}