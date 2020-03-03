title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

let nonFormatted = 
title + " " + name + " " + surname + "\n"
+ "ul. " + street + "\n" 
+ zip + " " + city + "\n" 
+ country.toUpperCase();

let formatted = 
`${title} ${name} ${surname} 
ul. ${street} 
${city} ${zip} 
${country.toUpperCase()}`

console.log(nonFormatted);
console.log(formatted);