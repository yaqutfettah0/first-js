function numCounter(metn) {
    
    let say = 0;

   
    for (let i = 0; i < metn.length; i++) {
      
        if ((metn[i] >= 'a' && metn[i] <= 'z') || (metn[i] >= 'A' && metn[i] <= 'Z')) {
            say++;
        }
    }


    return say;
}

let metn = "salam dunya";

console.log(`metndeki herflerin sayi: ${numCounter(metn)}`);
