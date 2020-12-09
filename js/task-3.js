const findLongestWord = function (string) {
    // твой код
    const arr = string.split(' ');
    let longestWord = arr[0];

    // for (const item of arr) {
    //     if (item.length > longestWord.length) {
    //         longestWord = item;
    //     }
    // }

    for(let i = 1; i < arr.length; i += 1) {
        
        if (arr[i].length > longestWord.length) {
                    longestWord = arr[i];
                }
    }

    return longestWord;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'