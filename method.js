export function getDays(currentDate){

    let newYear = new Date(currentDate.getFullYear()+1, 0, 1, 0, 0, 0, 0)

    return Math.abs(newYear - currentDate) / (1000 * 60 * 60 * 24);

}