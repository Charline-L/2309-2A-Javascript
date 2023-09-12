/* Concatenation */
const firstName = "Charline";
const lastName = "Laporte";
const age = 30;

// Bonjour je m'appelle Charline Laporte j'ai 30 ans
const sentenceA =
  "Bonjour je m'appelle " +
  lastName +
  " " +
  firstName +
  " j'ai " +
  age +
  " ans";
console.log(sentenceA);
const sentenceB = `Bonjour je m'appelle ${firstName} ${lastName} j'ai ${age} ans`;
console.log(sentenceB);
