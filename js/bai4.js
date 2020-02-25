getNumInFibo()
function getNumInFibo(){
    let n1 = 0;
    let n2 = 1;
    let temp = 0;

    while(true){
        temp = n2;
        n2=n2+n1;
        n1=temp;
        if (n1%5==0){
            alert("So dau tien trong day fibonaci chia het cho 5: "+n1);
            break;
        }
    }

}