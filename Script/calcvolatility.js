// Student:       Jerinca vreugdenhil
// Studentnumber: 12405965

// this file should calculates the volatility of a stock

function calculateVolatility(hunderdDays, dates){

// make space
var returnList = [];
var returnDaily = [];
var sum = 0;
var returnAverage = 0;
var returnDay = 0;

// get elemetns in list 
hunderdDays.forEach(function(element){  
    var priceClose = element["Close"]
    var dateStock = element["Date"]
    returnList.push([priceClose, dateStock])
    });

var i;
counterVol = 0;

// calculate returns
for (i = 0; i < 99; i++) { 
  if (i == 0){
    continue;
  }
  else{
    var oldStock = returnList[counterVol][0]
    var newStock = returnList[counterVol + 1][0]
    var returnDay = ((oldStock - newStock) / oldStock)
    sum+=returnDay
    counterVol+=1;
    returnDaily.push(Number(returnDay))  
  }
}

// calculate average return
var averageReturn = (sum / 100);
var sumPower = 0;
var calculatedVariance = 0;
var dictionairyVolatility = [];

// caclulate variance
returnDaily.forEach(function(element){
  var difference = element - averageReturn
  var power = Math.pow(difference, 2)
  sumPower +=power;
  });

calculatedVariance = sumPower * (1 / (100 - 1))

// calculate daily, yearly and monthly
var volatilityDaily = Math.sqrt(calculatedVariance) * 100;
var volatilityYearly = Math.sqrt(251) * volatilityDaily;
var volatilityMonthly = volatilityYearly / Math.sqrt(12);

// push everything in dictionairy
dictionairyVolatility.push({"TimePeriod": "Daily-Volatility", "Volatility": Math.round(volatilityDaily)});
dictionairyVolatility.push({"TimePeriod": "Monthly-Volatility", "Volatility": Math.round(volatilityMonthly)});
dictionairyVolatility.push({"TimePeriod": "Yearly-Volatility", "Volatility": Math.round(volatilityYearly)});

var volatilities = ["Daily-Volatility", "Monthly-Volatility", "Yearly-volatility"];

return [dictionairyVolatility, volatilities];

}