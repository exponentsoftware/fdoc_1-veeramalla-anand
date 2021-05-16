function varietyOfWords(words) {
    let count = 0;
    let split = words.split(/\W+/);
    for (let i = 0; i < split.length; i++) {
      if (split[i].length !== 1) {
        count += 1;
      }
    }
    console.log(count);
  }
  
  const sentence = "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher";
  varietyOfWords(sentence);