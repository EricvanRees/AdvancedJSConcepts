// Using the "test" method, returns true or false

/* let sentence = "The dog chased the cat."

let regex = /the/ 

let myString = "Hello World!";
let myRegex = /Hello/;
let result = myRegex.test(myString)

console.log(result); // logs true */

// Match literal strings - case sensitive

/* let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding); */

// test for multiple words at once using pipe char
/* let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
 */
// Ignore Case While Matching

/* let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString); */ // logs true

// the "i" flag ignores case

// Extract Matches
// use the match method to extract matches

/* let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); */ // logs "coding"

// Find More Than the First Match
// the "g" flag helps to find multiple matches

/* let testStr = "Repeath, Repeath, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex); // returns array of 3 elements

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // combines two flags 
let result = twinkleStar.match(starRegex);  

console.log(result); // returns ["Twinkle", "twinkle"] */ 

// Match Anything with Wildcard Period
// a "." is a wildcard char

/* let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // returns ["hum"]
hugStr.match(huRegex); // returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.text(exampleStr);

console.log(result); // returns true */

// Match Single Character with Multiple Possibilities

// match from a predefined group of chars

/* let bgRegex = /b[aiu]g/; // would match bag, big or bug

let quoteSample = "Beware of bugs in the above code; I have only proved it correct...";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result); // logs all vowels in string */

// Match Letters of the Alphabet
// match a range of letters

/* let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // = match all upper and lowercase letters in the entire string
let result = quoteSample.match(alphabetRegex);

console.log(result); // matches every letter in the string */

// Match Numbers and Letters of the Alphabet

/* let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex);

console.log(result); // logs every number and letter in the defined range */

/* // Match Single Characters Not Specified
// = chars you don't want to match (negated chars)
// use carrot char

let quoteSample = "3 blind mice."
let myRegex = /[^0-9aeiou]/ig;
let result = quoteSample.match(myRegex);

console.log(result); // returns everything except vowel and numbers */

// Match Characters that Occur One or More Times

/* let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result); // logs ["ss", "ss"] */

// Match Characters that Occur Zero or More Times
// use the star (*) character

/* let soccerWord = "goooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/

/* soccerWord.match(goRegex); // returns ["gooooo"]
gPhrase.match(goRegex); // returns ["g"]
oPhrase.match(goRegex); // returns null

let chewieQuote = "Aaaaaaaaaaaaaaaaaargh!";
let chewieRegex = /Aa*/
/* let result = chewieQuote.match(chewieRegex);

console.log(result);   */

// Find Characters with Lazy Matching

// A greedy match finds the longest possible part of a string that fits the regex pattern, while a lazy match finds the smallest possible part of a string that matches the regex pattern. Regex patterns default to greedy.

/* let string = "titanic";
let regex = /t[a-z]*i/; // t + zero or more letters + letter i at the end
string.match(regex); // greedy match logs "titani"

// lazy match: let regex = /t[a-z]*?i/, logs "ti"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // = Zero or more occurances of any chars = greedy match

// lazy match let myRegex= /<.*?>/; logs ["<h1>"]

let result = text.match(myRegex); // returns the whole string


console.log(result); */

// Challenge

/* let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/g;

let matchedCiminals = crowd.match(reCriminals);
console.log(matchedCiminals); */

// Match Beginning String Patterns
// outside of brackets, a carrot char is used to match the beginning of a string

/* let rickyAndCal = "Cal and Ricky both like racing."
let calRegex = /^Cal/; // logs true
let result = calRegex.test(rickyAndCal);
console.log(result); */

// Match Ending String Parts
// use dollar sign

/* let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose); 
console.log(result); // true */

// Match All Letters and Numbers
// /\w/ = matches capital a-z, lowercase a-z, digits 0-9 and _

/* let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); // 31, length of string excluding spaces and period. */

// Match Everything But Letters and Numbers
// use "W"

/* let quoteSample = "The five boxing wizards jump quickly."
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result); // logs 6 */

// Match All Numbers
// \d - match all digits

/* let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;
console.log(result); // logs 3 */

// Match All Non-Numbers
// use "\D"

/* let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g;
let result = numString.match(numRegex).length;
console.log(result); // logs 24 */

// Restrict Possible Usernames

// There are 4 requirements:
// 1) If there are numbers, they must be at the end.
// 2) Letters can be lowercase and uppercase.
// 3) At least two characters long. 
// 4) Two-letter names can't have numbers.

/* let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; 
let result = userCheck.test(username); */

// Match Whitespace

/* let sample = "Whitespace is important in separating words."
let countWhiteSpace = /\s/g; // logs all whitespaces as " "
let result = sample.match(countWhiteSpace);
console.log(result); */

// Match Non-Whitespace Characters
// use \S

/* let sample = "Whitespace is important in separating words."
let countWhiteSpace = /\S/g; // logs all whitespaces as " "
let result = sample.match(countWhiteSpace);
console.log(result);  */

// Specify Upper and Lower Number of Matches
// use quantity specifiers (curly brackets)

/* let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);

console.log(result); // logs true */

// Specify Only the Lower Number of Matches
// using /z{4,}/ = a number followed by a comma

/* let haStr = "Hazzzzaz";
let haRegex =  /z{4,}/;
let result = haRegex.test(haStr); */

// Specify Exact Number of Matches
// = single number within curly braces

/* let timStr =  "Timmmmber";
let timRegex = /Tim{4}ber/; // looks for 4 m's
let result = timRegex.test(timStr); */

// Check for All or None
// a question mark checks for zero or one of the preceding elements

/* let favWord = "favorite";
let favRegex = /favou?rite/; // string may or may not have a "u"
let result =  favRegex.test(favWord); */

// Positive and Negative Lookhahead
// Lookaheads are patterns that tell JS to look ahead in your string to check for patterns further along. This can be useful if you want to search for multiple patterns over the same string. There are positve and negative lookaheads.

/* let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // positive LA: look for a "u", but without returning it
let qRegex = /q(?!u)/; // negative LA: make sure the "u" is NOT present later in the string
quit.match(quRegex); // returns ["q"]
noquit.match(qRegex); // returns ["q"] */

// a more practical example of lookaheads is to check for more patterns in one string, such as looking for passwords of at least 5 chars long with 2 consecutive digits.

/* let sampleWord = 'astronaut22';
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

console.log(result); // returns false */

// Reuse Patterns Using Capture Groups
// use parentheses to group things you're searching for. You can also use them to repeat substrings usng a slash and a number: "\1"

/* let repeatStr = "regex regex";
let repeatRegex = /(w+)\s\1/;
repeatRegex.test(repeatStr); // returns true
repeatStr.match(repeatRegex); // returns ["regex regex", "regex"], or the full string and whatever is in the capture group

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

console.log(result); */

// Use Capture Groups to Search and Replace
// use the replace function

/* let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// returns "The sky is blue."

"Code Camp".replace(/(w+)\s(\w+)/, '$2 $1');
// returns "Camp Code"

let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "bad";
let result = huhText.replace(fixRegex, replaceText);

console.log(result); */

// Remove Whitespace from Start to End

/* let hello = "      Hello, World!    ";
let wsRegex = /^\s+|\s+$/g; // pipe char means "or"
let result = hello.replace(wsRegex, "");
console.log(result); */



















