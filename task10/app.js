function number() {
    let reqem = prompt ("Bir reqem daxil edin:");

    if (reqem > 0) {
        console.log("musbetdir.");  
    } else if (reqem < 0) {
        console.log("menfidir.");  
    } else {
        console.log("sifirdir.");
    }
}
number();