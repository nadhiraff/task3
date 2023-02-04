function prima(number){
    let cekbilangan = 0;
    
    for(i=0;i<=number;i++){
        if(number%i==0){
            cekbilangan++;
        }
    }

    if(cekbilangan%2==0){
        console.log(number," adalah bilangan Prime");
    }else{
        console.log(number, " bukan bilangan prima");
    }
}

prima(9)