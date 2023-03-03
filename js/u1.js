async function asyncReadFile(filename) {
    try {
      const response = await fetch(filename);
      const contents = await response.text();
      const words = contents.split(/\r?\n/);
      return words;
    } catch (err) {
      console.log(err);
    }
  }
  async function showWord() {
    const words = await asyncReadFile('./unit1.txt');
    const num = document.getElementById("number_of_words");
    const len = words.length;
    const randomIndex = Math.floor(Math.random() * len);
    num.innerHTML = randomIndex + 1 + " / " + len;
    const word = words[randomIndex];
  
    let myArray = word.split(".");
    console.log(myArray[0])
    var checkBox = document.getElementById("myCheck");
    
    if (checkBox.checked == false){      
    document.getElementById('word').innerHTML = myArray[0];
    document.getElementById('def').innerHTML = myArray[1];
    }
  }