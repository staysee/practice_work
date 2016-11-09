/* 1a. Verify a prime number

A prime number is only divisible by itself and 1.
So I will run a while loop and increase by 1 */
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if (n % divisor == 0){
      return false;
    }
    else
      divisor++;
  }
  return true;
}


/* 1b. Make isPrime function better/faster

After 3, I can increase the divisor by 2. If a number is divisible by any even
number, it will be divisible by 2 */
function isPrime(n){
  var divisor = 3;
  var limit = Math.sqrt(n);

  //check simple cases
  if (n == 2 || n == 3)
    return true;
  if (n % 2 == 0)
    return false;

  while (divisor <= limit){
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true
}

/* 2. Find all prime factors of a number

Run a while loop. Start dividing by two and if not divisible,
increase divider until done */
function primeFactors(n){
  var factors = [];
  var divisor = 2;

  while (n > 2){
    if ( n % divisor == 0){
      factors.push(divisor);
      n = n / divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;
}
     // Run time complexity of this is O(n)

/* 3a. Get nth Fibonacci number

Create an array and iterate through. Fibonnaci sequence is the addition of the two
numbers before it. */
function fibonacci(n){
  var fib = [0,1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
return fib[n];
}
    //Run-time complexity is O(n)

/* 3b. Make the fibonacci function recursive */
function fibonacci(n){
  if (n <= 1)
    return n;
  else
    return fibonacci(n-1) + fibonacci(n-2);
}
    //Run-time complexity is O(2^n)

/* 4. Find the greatest common divisor of two numbers */
function greatestCommonDivisor(a, b){
  var divisor = 2;
  var greatestDivisor = 1;

  //cannot pass a negative number
  if (a < 2 || b < 2)
    return 1;

  while (a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0){
      greatestDivisor == divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

/* 5. Remove duplicate members from an array

Start a while loop and keep an object/associated array.
If I find an element for the first time, I will set its value to true
which whill tell me element added once. If I find a element in the exists
object, I will not insert if into the return array */
function removeDuplicate(arr){
  var exists = {};
  var outArr = [];
  var elm;

  for (var i=0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}

/* 6. Merge two sorted array */
function mergeSortedArray(a,b){
  var merged = [];
  var aElm = a[0];
  var bElm = b[0];
  i = 1;
  j = 1;

  if(a.length == 0)
    return b;
  if(b.length == 0)
    return a;
  /*
  if aElm or bElm exists, we will insert to merged array
  to insert: aElm exists and bElm doesn't exist
              or both exists and aElm > bElm
  */
  while(aElm || bElm){
    if( (aElm && !bElm) || aElm < bElm ){
      merged.push(aElm);
      aElm = a[i++];
    }
    else{
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
}

/* 7. Swap two numbers without using a temporary variable */
function swapNum(a, b){
  console.log('BEFORE SWAP: ', 'a: ', a, 'b: ', b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log('AFTER SWAP: ', 'a: ', a, 'b: ', b);
}

/* 8a. Reverse a string in javascript

Loop through the string backwards and concatenate letters to new str */
function reverse(str){
  var rtnStr = '';

  for (var i = str.length-1; i >= 0; i--){
    rtnStr += str[i];
  }
  return rtnStr;
}

/* 8b. Another way to reverse a string? In older browsers like IE it is slow

Use an array and some checking. If string is null or type not string, it will fail.
*/
function reverse(str){
  var rtnStr = [];

  if(!str || typeof str != 'string' || str.length < 2) return str;

  for (var i = str.length-1; i>=0; i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}
    //Run-time complexity: O(n)

/* 8c. Use a built-in method to make it cleaner */
function reverse(str){
  if(!str || str.length < 2) return str;

  return str.split('').reverse().join('');
}

/* 9a. Reverse words in a sentence

Check for whitespace and walk through the string.
Ask if there could be multiple whitespaces */
function reverseWords(str){
  var rev = [];
  var wordLen = 0;

  for (var i = str.length - 1; i >= 0; i--){
    if(str[i] == ' ' || i == 0){
      rev.push(str.substr(i,wordLen+1));
      wordLen = 0;
    }
    else
      wordLen++;
  }
  return rev.join(' ');
}

/* 9b. Use built-in methods */
function reverseWords(str){
  return str.split(' ').reverse();
}

/* 10a. Reverse words in place - "I am the good boy" becomes "I ma eht doog yob"

Need to do both string reverse and word reverse
- split up the words
- reverse the order of words
- join with a space in between words
- split the characters
- reverse the entire string of characters
- join the chracters that have no spaces inbetween*/
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

/* 11. Find first non-repeating char in a string

Ask followup questions
- Is it case sensitive?
- Is it very long string or couple hundred?
- Use example string 'the quick brown fox jumps then quickly blow air'
*/
function firstNonRepeatingChar(str){
  var len = str.length;
  var char;
  var charCount = {};

  for (var i = 0; i < len; i++){
    char = stri[i];
    if (charCount[char])
  }
}





























