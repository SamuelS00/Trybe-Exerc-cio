enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
};

enum DataFormat {
  'dd/mm/aaaa' = 1,
  'dd/mm/aa',
  'aaaa/mm/dd',
  'aa/mm/dd',
  'aaaa-mm-dd',
  'aa-mm-dd',
  'dd de M de aa',
  'dd, M de aaaa'
};

type formatYear = 'aa' | 'aaaa';
type formatMonth = 'mm' | 'M';

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    let isCorrect: boolean = false;

    if(dia > 30 || mes > 12 || ano > 2022 || ano < 1900) isCorrect = true;
    
    this.dia = isCorrect ? 1 : dia; 
    this.mes = isCorrect ? 1 : mes; 
    this.ano = isCorrect ? 1970 : ano;
  }

  private dataCondition(data: number) {
    return data < 9 ? `0${data}` : `${data}`;
  }

  getDate(): string {
    let data: string = 'dd/mm/aaaa'

    data = data.replace('dd', this.dataCondition(this.dia));
    data = data.replace('mm', this.dataCondition(this.mes));
    data = data.replace('aaaa', `${this.ano}`);

    return data;
  };

  getMonthName() {
    return Months[this.mes];
  };

  getDay() {
    return this.dataCondition(this.dia);
  }

  getMonth(format: formatMonth) {
    if(format === 'M') return this.getMonthName();
    
    return this.dataCondition(this.mes);
  }

  getYear(format: formatYear) {
    if(format === 'aa') return this.ano.toString().slice(-2);

    return this.ano;
  }

  isLeapYear() {
    const leapYear = this.ano % 4 === 0;

    return leapYear;
  };

  compare(data: Data) {
    if(new Date(data.getDate()) > new Date(this.getDate())) return 1;
    if(new Date(data.getDate()) < new Date(this.getDate())) return -1;

    return 0;
  };

  format(legenda: string) {
    if(legenda.includes('aaaa')) legenda = legenda.replace('aaaa', `${this.getYear('aaaa')}`);
    if(legenda.includes('aa')) legenda = legenda.replace('aa', `${this.getYear('aa')}`);
    if(legenda.includes('dd')) legenda = legenda.replace('dd', `${this.getDay()}`);
    if(legenda.includes('mm')) legenda = legenda.replace('mm', `${this.getMonth('mm')}`);
    if(legenda.includes('M')) legenda = legenda.replace('M', `${this.getMonth('M')}`);
  
    return legenda;
  }
};

const data = new Data(1, 2, 2021);
const data1 = new Data(1, 4, 2020)

console.log('Date: ', data.getDate());
console.log('Month Name: ', data.getMonthName());
console.log('Leap Year: ', data.isLeapYear());
console.log('Compare: ', data.compare(data1));
console.log('Format: ', data.format(DataFormat[3]));
console.log('Get Day: ', data.getDay());
console.log('Get Month: ', data.getMonth('mm'));
console.log('Get Month unabbreviated: ', data.getMonth('M'))
console.log('Get Year: ', data.getYear('aa'));