// Criando duas datas diferentes
const data1 = new Date("2025-04-10T00:00:00");
const data2 = new Date("2025-04-11T00:00:00");
const data3 = new Date("2025-04-11T00:00:00");
// Comparações diretas
console.log(data1 < data2);   // Saída: true
console.log(data1 > data2);   // Saída: false
console.log(data2.getMilliseconds() == data3.getMilliseconds());