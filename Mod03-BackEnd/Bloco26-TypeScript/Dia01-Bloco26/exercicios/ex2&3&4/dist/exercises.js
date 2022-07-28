"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myStation = void 0;
const readline = require('readline-sync');
var Months;
(function (Months) {
    Months["JANUARY"] = "January";
    Months["FEBRUARY"] = "February";
    Months["MARCH"] = "March";
    Months["APRIL"] = "April";
    Months["MAY"] = "May";
    Months["JUNE"] = "June";
    Months["JULY"] = "July";
    Months["AUGUST"] = "August";
    Months["SEPTEMBER"] = "September";
    Months["OCTOBER"] = "October";
    Months["NOVEMBER"] = "November";
    Months["DECEMBER"] = "December";
})(Months || (Months = {}));
;
var Seasons;
(function (Seasons) {
    Seasons["SUMMER"] = "Summer";
    Seasons["FALL"] = "Fall";
    Seasons["WINTER"] = "Winter";
    Seasons["SPRING"] = "Spring";
})(Seasons || (Seasons = {}));
const seasonsMonthsNorth = {
    [Seasons.WINTER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
    [Seasons.FALL]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    [Seasons.SUMMER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
};
const seasonsMonthsSouth = {
    [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
    [Seasons.SPRING]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    [Seasons.FALL]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
};
function returnStation(hemisphere, month) {
    const hm = hemisphere === 'North' ? seasonsMonthsNorth : seasonsMonthsSouth;
    const entries = Object.entries(hm);
    let stations = '';
    entries.forEach((sm, index) => {
        if (sm[1][index] === month) {
            stations = stations.concat(sm[0], ' ');
        }
        ;
    });
    return stations;
}
;
function capitalize(word) {
    const wordCapitalized = (word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase());
    return wordCapitalized;
}
;
;
function myStation() {
    const month = readline.question('What month of the year are we in?');
    const hemisphere = readline.question('which hemisphere are you in?');
    const stations = returnStation(capitalize(hemisphere), capitalize(month));
    console.log(`Seasons for ${month} in the ${hemisphere} Hemisphere is: ${stations}`);
}
exports.myStation = myStation;
;
