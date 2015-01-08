
function problem1() {

    var base = new Array();
        base[0] = document.getElementsByTagName('input')[0].value;
        base[1] = document.getElementsByTagName('input')[1].value;
        base[2] = document.getElementsByTagName('input')[2].value;
        base[3] = base[1]*base[2];

        var n1 = Math.floor(base[0]/base[1]);
        var n2 = Math.floor(base[0]/base[2]);
        var n3 = Math.floor(base[0]/base[3]);
        
        if (base[0]%base[1] == 0) { n1 = n1 - 1; }
        if (base[0]%base[2] == 0) { n2 = n2 - 1; }
        if (base[0]%base[3] == 0) { n3 = n3 - 1; }
        
        var total = base[1] * (n1*(n1+1)/2) + base[2] * (n2*(n2+1)/2) - base[3] * (n3*(n3+1)/2);
        document.getElementById('soln1').innerHTML = total;
        return total;

}
document.getElementById('soln1').innerHTML = problem1();

function problem2() {

    var input =  document.getElementsByTagName('input')[3].value;
    var sum = -1;
    
    for (var i = 0; fibo(i) < input; i = i + 3) {
        sum = sum + fibo(i);
    }
    
    function fibo(n) {
        var check = (n < 3) ? 1: fibo(n-1) + fibo(n-2);
        return check;
    }

    document.getElementById('soln2').innerHTML = sum;
    return sum;
}
document.getElementById('soln2').innerHTML = problem2();

function problem3() {

    var primeFactors = new Array();
    var sqrtN = 0;

    N = document.getElementsByTagName('input')[4].value;

    while (N%2 === 0) {
        primeFactors.push(2);
        N = N/2;
    }

    sqrtN = Math.floor(Math.sqrt(N));
    seive(N, 3)

    function seive(N, start) {
        for (var i = start; i <= sqrtN; i = i + 2) {
            if (N%i === 0) {
                primeFactors.push(i);
                reset(i);
                return;
            }
        }
        primeFactors.push(N);
    }

    function reset(i) {
        N = N/i;
        sqrtN = Math.floor(Math.sqrt(N));

        if (sqrtN < i) {
            primeFactors.push(N);
            return;
        }

        seive(N, i)
    }
    document.getElementById('soln3').innerHTML = primeFactors[primeFactors.length - 1];
    document.getElementById('factors').innerHTML = '<p>'+"[" + primeFactors + "]"+'<p>';
    
    return primeFactors[primeFactors.length - 1];
}
document.getElementById('soln3').innerHTML = problem3();

function parameterboxVisibility(name) {

    var getValue = window.getComputedStyle(document.querySelector('#'+name)).getPropertyValue('visibility');
    var check = (getValue === 'hidden') ? 'visible': 'hidden';
    document.getElementById(name).style.visibility = check;
}