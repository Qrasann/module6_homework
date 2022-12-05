//Задание2
function simpleNumbers(numbers) {
    let i;
      if (numbers < 2 || numbers > 1000)
        return"Данные неверны. Обратите внимание на числа 0 и 1";
        let k = Math.sqrt(numbers);
    for (let i = 2; i <= k; i++)  
      if(numbers % i === 0)    
        return"Составное число";
  return"Простое число";
    };
  console.log(simpleNumbers(-10));