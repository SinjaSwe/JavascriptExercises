function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function isLeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("GFG").innerHTML  
        = (year % 100 === 0) ? (year % 400 === 0) 
                             : (year % 4 === 0); 
} 

function isASunday () {
    var year=document.getElementById("yearStart").value; //take user input
    
    var d = new Date (yearStart, 0, 1) // year, month, date how to write a date in javascript new Date(year, month[, day[, 

    if (d.getDay() == 0){
    document.getElementById( "sun").innerHTML = " The year begins on a Sunday! "
}
    else (d.getDay() !== 0)
    {
    document.getElementById( "sun").innerHTML = "The year does not begin on a Sunday!"
    }
}   

// ASSIGNMENT 4

let randomNumber = Math.trunc(Math.random() * 10) + 1; //random number generator
console.log (randomNumber); // writes hidden number to console

const displayMessage = function (message) {
    document.querySelector('#message').textContent = message;
  };

document.querySelector

function enterANumber () {
        
    const number = Number(document.getElementById('guess').value); //get the value enteredber
    console.log (document.getElementById('guess').value); // prints guess to console
        

    if (!number) { //if  no guess, just click
        displayMessage('No number entered!');
    } 
    else if (number === randomNumber)  { 
        displayMessage('Correct guess!');          
    } 
    else  {
        displayMessage('Boo hoo! Wrong guess!');;  //# when calling a id
    }   
}

// ASSIGNMENT 5
today = new Date();
var christmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25)
{
    christmas.setFullYear(christmas.getFullYear()+1); 
}
var one_day=1000*60*60*24; 
console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+"days left until Christmas Day!"); 
document.getElementById("daysToChristmas").innerHTML   = (Math.ceil((christmas.getTime()-today.getTime())/(one_day))+" days left until Christmas Day!"); 

//ASSIGNMENT 6

function reverseAWord() {
    const str = String(document.getElementById('enteredWord').value); //get the value enteredber
    console.log (document.getElementById('enteredWord').value); // prints guess to console

   document.getElementById("reversedString").innerHTML = str.split("").reverse().join(""); 
  
    
} 

//ASSIGNMENT 7

function generateCombos() {

var input = (document.getElementById('enteredText').value); //get the value entered
console.log (document.getElementById('enteredText').value); // prints guess to console

var result = document.getElementById("cominationsAvailable")
result.innerHTML=""

    for (var i = 0 ; i < input.length; i++) {
        
        for (var b = 0 ; b < input.length; b++) {
            
            if (i == b) {
                
                result.innerHTML += input.charAt(i) + ","
            }
            else
            {
                result.innerHTML += input.charAt(i) + input.charAt(b) + ","
            }            
        }

    }}

//ASSIGNMENT 8

function generateAlphaOrder() {

var word = (document.getElementById('wordToSort').value); //get the value entered
console.log (document.getElementById('wordToSort').value); // prints guess to console

var arr = word.split(''); 
var array = arr.sort(); 

document.getElementById("abcOrder").innerHTML = array.join(); 

}

//ASSIGNMENT 10

function checkIfPrime() {
    
var number = (document.getElementById('enteredNumber').value); //get the value entered
console.log (document.getElementById('enteredNumber').value); // prints guess to console
    
const resultMessage = function (prime) 
{
    document.querySelector('#prime').textContent = prime;
};

if (number===1)
{
    resultMessage(`The number ${number} is a prime number`);
}
else if (number===2)
{
    resultMessage(`The number ${number} is not a prime number`);
} 
else
{
    for(var x = 2; x<number; x++)
    {
        if (number % x ===0)
        {
            resultMessage(`The number ${number} is not a prime number`);
        }
    }
    resultMessage(`The number ${number} is a prime number`);
}

}

//ASSIGNMENT 14 Array

    var workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    document.getElementById("days").innerHTML = (`${workDays} are workdays`) 
    
    
//ASSIGNMENT 15 Array 2

var x = 0;
var array = Array();

function addToArray()
{
 array[x] = document.getElementById("text1").value;
 x++;
 document.getElementById("text1").value = "";
}

function sortArray()
{
    document.getElementById("sortedArray").innerHTML = array.sort(function(a,b){ 
    return a - b;  })
}

//ASSIGNMENT 16 Array 3

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  } 
 
  var myArray = ['b', 6, 'b', 2, 6, 'q', 6, 'q', 1, '6'];
  document.getElementById("removeDuplicates").innerHTML = myArray.filter(onlyUnique);
  








    
