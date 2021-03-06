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
let bornWhen = inventors.filter(invent => invent.year >= 1500 && invent.year <= 1599 ? true : false)
console.log(bornWhen)

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
let inventorsNames = inventors.map((ft) => {
    let full = [];
    return full = [`${ft.first} ${ft.last}`]
})
console.table(`2. ${inventorsNames}`)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let birthRange = inventors.sort((young, old) => young.year - old.year)
console.table(birthRange)

// Array.prototype.reduce()
// 4. How many years did all the invetors live?
let yearsLived = inventors.reduce((acc, curr) =>{
    return acc += (curr.passed - curr.year)
},0)
console.log(`4. ${yearsLived}`)

// 5. Sort the inventors by years lived


// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. Sort Exercise
// Sort the people alphabetically by last name


// 8. Reduce Excercise
// sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
    'walk', 'car', 'van', 'car', 'truck'];
