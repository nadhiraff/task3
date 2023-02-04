let number=[1,2,3,4,5,6,7]
let jumlah  = 0;
const total=number.reduce((a,b) => a += b);
for(i=0;i<number.length;i++){
    jumlah = total - number[i];
    console.log("Jumlah semua angka kecuali ", number[i], "adalah ", jumlah);
}
console.log("\nMinimum nilai adalah ",total-Math.max(...number));
console.log("Maksimum nilai adalah ",total-Math.min(...number));
