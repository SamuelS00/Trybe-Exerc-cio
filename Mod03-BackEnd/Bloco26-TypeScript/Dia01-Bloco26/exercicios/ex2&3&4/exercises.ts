import { statSync } from "fs";

const readline = require('readline-sync');

enum Months {
  JANUARY = 'January',
  FEBRUARY = 'February',
  MARCH = 'March',
  APRIL = 'April',
  MAY = 'May',
  JUNE = 'June',
  JULY = 'July',
  AUGUST = 'August',
  SEPTEMBER = 'September',
  OCTOBER = 'October',
  NOVEMBER = 'November',
  DECEMBER = 'December',
};

enum Seasons {
  SUMMER = 'Summer',
  FALL = 'Fall',
  WINTER = 'Winter',
  SPRING = 'Spring'
}

const seasonsMonthsNorth = {
  [Seasons.WINTER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
  [Seasons.FALL]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.SUMMER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
}

const seasonsMonthsSouth = {
  [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
  [Seasons.SPRING]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.FALL]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
};

function returnStation(hemisphere: string, month: string) {
  const hm = hemisphere === 'North' ? seasonsMonthsNorth : seasonsMonthsSouth;
  const entries= Object.entries(hm);
  let stations: string = ''
  
  entries.forEach((sm, index) => {
    if(sm[1][index] === month ) {
      stations = stations.concat(sm[0], ' ');
    };
  })

  return stations;
};

function capitalize(word: string) : string {
  const wordCapitalized = ( 
    word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
  );

  return wordCapitalized;
};;

export function myStation() {
  const month: string = readline.question('What month of the year are we in? ');
  const hemisphere: string = readline.question('which hemisphere are you in? ');

  const stations: string = returnStation(capitalize(hemisphere), capitalize(month));

  console.log(`Seasons for ${month} in the ${ hemisphere } Hemisphere is: ${ stations }`)
};