// import sha256 from 'js-sha256';  
  
  
// // Takes lexicon object and calculates lexicon hash
// const getLexiconHash = (lexicon) => {
// var lexiconArray = lexicon.words;
// if (lexiconArray !== undefined) {
//     var lexiconString = lexiconArray.toString();
//     var hashString = lexiconString.replaceAll(",", "\n");
//     var lexiconHash = sha256(hashString);
//     return lexiconHash;
// }
// };

// // Takes lexicon name and compares the lexicons calculated hash with set hash value
// const verifyHash = (lexicon) => {
// const verifiedHash = "384d521e516ddaf2c1046f73779c90b675629612d2d57cca8888bf10537f19b0";
// var lexiconHash = getLexiconHash(Object(lexiconDictionary[lexicon]));
// if (lexiconHash === verifiedHash) {
//     return (<span className="lexiconVerify">Official</span>);
// }
// };