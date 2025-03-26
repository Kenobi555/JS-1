 const allMoney = 1000;
 const rate  = 0.07;
 const depositLength = 24;

 const result = allMoney * (1 + rate / 12) ** depositLength;
 console.log(result);
 let ostatok = result - 13500;

 if (result >= 13500) {
    console.log(`Мы сможем купить этот домик за полученные деньги за ${depositLength} месяца
    Остаток - ${ostatok} $`);
 } else {
    console.log(`Мы не сможем купить...Сорри`)
 };

 
