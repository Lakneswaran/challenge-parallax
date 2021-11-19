const names = ["Police", "Thieve", "King", "Queen", "Minister"];
const youPc = ["YOU", "PC", "PC", "PC", "PC"];

// suffelnames(names, youPc);
var random = getRandom(names, names.length);
var random1 = getRandom(youPc, youPc.length);
console.log(random);
console.log(random1);

for(let i =0; i<random1.length; i++){
    
let rnd = document.getElementById(i+1);
rnd.innerHTML += "<p>" + random1[i] + " "+ random[i] + "</p>";

}
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}



// function suffelnames(names, youPc){

// names.forEach(element => {
//     var random = names[(Math.random() * names.length) | 0];
//     console.log(random);
//     let rnd = document.getElementById('1')
//     rnd.innerHTML += "<p>" + random + "</p>";
// });
//    youPc.forEach(element => {
//     var random1 = youPc[(Math.random() * names.length) | 0];
//     console.log(random1);
//    });
    
// }


