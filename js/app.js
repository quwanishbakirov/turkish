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
    const words = await asyncReadFile('./word.txt');
    const defs = await asyncReadFile('./tran.txt');
    const num = document.getElementById("number_of_words");
    const len = 464;
    const randomIndex = Math.floor(Math.random() * len);
    num.innerHTML = randomIndex + " / " + len;
    const word = words[randomIndex];
    const def = defs[randomIndex];
  
    var checkBox = document.getElementById("myCheck");
  
    if (checkBox.checked == false){      
    document.getElementById('word').innerHTML = word;
    document.getElementById('def').innerHTML = def;
    }
  }