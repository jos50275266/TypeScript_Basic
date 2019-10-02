import fs from 'fs';

// Load and Parse
const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
    // String, not buffer
})
    .split('\n')
    .map((row: string) => {
        return row.split(',');
    });

const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';


let manUnitedWins = 0;

// Analyze - hard to understand What each string means
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === homeWin) {
        manUnitedWins++
    } else if (match[2] === "Man United" && match[5] === awayWin) {
        manUnitedWins++;
    }
}

// Report
console.log(`Man United Won ${manUnitedWins} games`)