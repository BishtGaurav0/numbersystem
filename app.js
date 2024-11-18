const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  const  primeNumbers = numbers.filter((number)=>{
    if(number <= 1 ) return false;
        for(let i=2 ; i<= Math.sqrt(number); i++){
            if(number %1 === 0 ) return false ;
        }
        return true;
    
  })
  console.log(primeNumbers);


  const primeArray = [];

  function isPrime(num) {
    if (num <= 1) return false;
     for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) return false;
     }
     return true;
   }
   
  
   for (let i = 0; i < numbers.length; i++) {
     if (isPrime(numbers[i])) {
       primeArray.push(numbers[i]);
     }
   }
   
   
   let maximum = primeArray[0];
   let minimum = primeArray[0];
   let sum = 0;
   for (let i = 0; i < primeArray.length; i++) {
     if (primeArray[i] > maximum) {
       maximum = primeArray[i];
     }
     if (primeArray[i] < minimum) {
       minimum = primeArray[i];
     }
     sum += primeArray[i];
   }
   
   console.log(`Prime Numbers: ${primeArray}`);
   console.log(`Maximum: ${maximum}`);
   console.log(`Minimum: ${minimum}`);
   console.log(`Sum: ${sum}`);