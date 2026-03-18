const numerosX: number[] = [33 ,22 ,1 ,2, 5, 4, 3];
numerosX.sort();
console.log(numerosX)
numerosX.sort((a,b)=> b - a);
console.log(numerosX)

const nomes: string[] = [ 'Xavier', 'Anisio', 'Rafael', 'Pedro'];

nomes.sort((a,b) => a.localeCompare(b));

console.log(nomes);


