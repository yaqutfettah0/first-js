function  factorial (a) {
    let number=1;
    for (let i=2; i<=a ; i++) {
        number *= i;
    }
    console.log(number);
}

factorial (5);
factorial (10);