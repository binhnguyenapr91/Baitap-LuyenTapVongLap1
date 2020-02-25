let noOfNumber = 4;
let sum = 0;
let count = 0;
let recentNumber=0;

getSum();

function getSum() {
    while (count < noOfNumber){
        if(checkNumber(recentNumber)){
            sum=sum+recentNumber;
            count++;
        }
        recentNumber++;
    }
    alert("Sum="+sum);
}

function checkNumber(number) {
    if (number%7==0){
        return true;
    }
    return false;
}
