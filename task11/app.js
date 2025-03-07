function mukemmelEded(a) {
    if (a < 1) return false;

    let cem=0;
    for (let i=1; i<a; i++) {
        if(a%i===0) {
            cem+=i;
        }
    }

    return cem=== a;
}

const eded = parseInt(prompt("Bir eded daxil edin:"), 10);

if (mukemmelEded(eded)) {
    console.log(eded + "mukemmel ededdir");
} else {
    console.log(eded + "mukemmel eded deyil");
}