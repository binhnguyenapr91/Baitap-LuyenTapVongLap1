
for(index=1;index<=100;index++){
    let display="";
    if(index % 15 ==0){
        display="FizzBuzz";
    }else if (index%5==0){
        display = "Buzz";
    }else if (index%3==0){
        display = "Fizz";
    }else{
        display = index;
    }
     console.log(display);

}




