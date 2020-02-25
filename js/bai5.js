let input1 = 10;
printNum(input1);
function printNum(input) {
    let n1=0;
    let n2=1;
    let num = 0 ;
    console.log(n1);
    let tong=0;
    for(let i=0;i<input-1;i++){
        num=n2;
        n2=n2+n1;
        n1=num;
        tong +=n1;
        console.log(n1)
    }
   console.log(tong);
}