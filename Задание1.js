function SumOddEven() {
    let arr = [1, 2, 3, 4, 5, 6];
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0 || arr[i] == null) {
        console.log("Ваш элемент 0 или null")
      }
      else if (arr[i] % 2 === 0) {
        even++;
        console.log(`Четных элементов в массиве ${even}`)
      } else {
        odd++;
        console.log(`Нечетных элементов в массиве ${odd}`)
      }
  }
  };
  SumOddEven();