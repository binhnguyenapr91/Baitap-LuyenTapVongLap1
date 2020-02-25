let input = 20;
printNum(input);
function printNum(input) {
    let n1=0;
    let n2=1;
    let num = 0 ;
    console.log(n1);
    console.log(n2);
    for(let i=3;i<input+2;i++){
        num=n2;
        n2=n2+n1;
        n1=num;
        console.log(n1)
    }
}
