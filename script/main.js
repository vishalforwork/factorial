document.getElementById('btn').onclick = function () {
    const val = document.getElementById('num').value;
    let res = 1;

    if (val === 0) {
        res = 1;
    }
    for (let i = 2; i <= val; i++) {
        res = res*i;
    }
    // console.log(res);
    document.getElementById('res').innerHTML = "the factorial of " + val + " is " + res;
}