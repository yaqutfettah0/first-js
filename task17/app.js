let metn = prompt("Mətni daxil edin:");
let herf = prompt("Axtarmaq istədiyiniz hərfi daxil edin:");


let say = 0;

for (let i = 0; i < metn.length; i++) {
    if (metn[i] === herf) {
        say++;
    }
}

// Nəticəni ekrana çıxarırıq
console.log(`"${herf}" hərfi mətndə ${say} dəfə təkrarlanır.`);