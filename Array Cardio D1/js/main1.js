// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Issac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilarie',
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Bernie, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Anneurin', 'Bevel, Ken',
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const born = inventors.filter(inventor => {
    // if(inventor.year >= 1500 && inventor.year <= 1599){
    //     return true;
    // } 
    return inventor.year >= 1500 && inventor.year <= 1599 ? true : false;  
})
console.table(born)
// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const names = inventors.map(fl => {
    return full = `${fl.first} ${fl.last}`
})
console.table(names)
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a,b) => {
    return a.year > b.year ? 1 : -1;
})
console.table(sorted)
// Array.prototype.reduce()
// 4. How many years did all the invetors live?
const lived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);
console.log(lived)
// 5. Sort the inventors by years lived
const longLived = inventors.sort((a,b) => {
    const old = a.passed - a.year;
    const young = b.passed - b.year

    return old > young ? -1 : 1
})
console.table(longLived)

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. Sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort( (last, first) => {
    const [aLast, aFirst] = last.split(', ');
    const [bLast, bFirst] = first.split(', ');

    return last > first ? 1 : -1;
})
console.table(alpha);

// 8. Reduce Excercise
// sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
    'walk', 'car', 'van', 'car', 'truck'];

const transport = data.reduce(function(obj, item) {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.table(transport);