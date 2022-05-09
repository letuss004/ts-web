import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader('football.csv');
reader.read();
let winsOfMU = 0;
for (let col of reader.data) {
  if (col[1] === 'Man United' && col[5] === MatchResult.HomeWin) {
    winsOfMU++;
  } else if (col[2] === 'Man United' && col[5] === MatchResult.AwayWin) {
    winsOfMU++;
  }
}

console.log("MU wins: ", winsOfMU);
