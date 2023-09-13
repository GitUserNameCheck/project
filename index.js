
let now = new Date()
let newYear = new Date(now.getFullYear()+1, 0, 1, 0, 0, 0, 0)
let difference = Math.abs(newYear - now) / (1000 * 60 * 60 * 24);

console.log(difference)