const isDataValid = (data) => {
    const arrData = data.split('/');
    const isValid = ( +arrData[0] <=  30 && +arrData[1] <= 12 && +arrData[2] > 1000 && +arrData[2] < 3000)
    
    return isValid;
 };

const isWarrPeridodValid = (warr) => {
    const isValid = warr >= 1 && warr <= 3;

    return isValid;
}

module.exports = { isDataValid, isWarrPeridodValid };