const ad = prompt("Adinizi daxil edin.");
const cins = prompt ("Cinsiyyetinizi qeyd edin.(k/q)");

if (cins == "k" || cins == 'K') {
    console.log('Salam cenab ');
} else if (cins == "q" || cins == 'Q') {
    console.log('Salam xanim ');
} else {
    console.log("cinsiyyetinizi dogru qeyd edin!")
}