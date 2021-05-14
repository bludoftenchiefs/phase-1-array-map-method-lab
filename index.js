const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
     return tutorials.map(function(tutorial){
      let words = tutorial.split(' ');
      let explicitWords = words.map(function(word){
          return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
        console.log(explicitWords);
        return explicitWords;
      });
  
  // const newTutorial = 'what does the this keyword mean?';
  //   const words = mySentence.split('');

  //   for (let i = 0; i < words.length; i++) {
  //       words[i] + words[i][0].toUpperCase() + words[i].substr(1);
  //   }

  //   words.join('');
  // return tutorials

//   const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");

}



