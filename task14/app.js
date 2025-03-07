function polidrom(soz) {
    let a=soz.length;

    for (let i = 0; i< a/2; i++) {
        if (soz[i] !== soz[a-1-i]) {
            return false;
        }

    }
    return true;
}

const soz= prompt("bir soz yazin:");

if(soz==="") {
    console.log("bir soz daxil et:");
    
} else if (polidrom(soz)){
    console.log(`"${soz}" sozu polidromdur.`);
    
} else {
    console.log(`"${soz}" sozu polidrom deyil`);
    
}