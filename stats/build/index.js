"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
let winsOfMU = 0;
for (let col of reader.data) {
    if (col[1] === 'Man United' && col[5] === MatchResult_1.MatchResult.HomeWin) {
        winsOfMU++;
    }
    else if (col[2] === 'Man United' && col[5] === MatchResult_1.MatchResult.AwayWin) {
        winsOfMU++;
    }
}
console.log("MU wins: ", winsOfMU);
