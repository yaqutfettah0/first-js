const ay = prompt("Bir ay adı daxil edin:");

switch (ay) {
    case "yanvar":
    case "mart":
    case "may":
    case "iyul":
    case "avqust":
    case "oktyabr":
    case "dekabr":
        console.log(`${ay} ayinda 31 gün var.`);
        break;
        
    case "aprel":
    case "iyun":
    case "sentyabr":
    case "noyabr":
        console.log(`${ay} ayında 30 gün var.`);
        break;
        
    case "fevral":
        console.log("Fevral ayında 28 və ya 29 gün var.");
        break;
        
    default:
        console.log("Xahiş olunur, düzgün bir ay adı daxil edin.");
}