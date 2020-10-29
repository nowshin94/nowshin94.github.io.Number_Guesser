function randomNumber() {
  let correct = Math.random() * (10 - 1) + 1;

  let correctAns = (correct = Math.floor(correct));
  return correctAns;
}

var results;
var alert;
let cA = randomNumber();
console.log(cA);

function vis() {
  if (results) {
    window.location.reload();
  }
  document.querySelector('.in').style.display = 'block';
  document.getElementById('inp').value = '';
  let change = `Enter Your Guess no 1!`;
  document.querySelector('.change').innerHTML = change;
  document.querySelector('#frm1').childNodes[2].innerHTML = '';
}

let count = 1;

function checkEXP() {
  guess1 = document.getElementById('inp').value;
  guess1 = parseInt(guess1);
  document.getElementById('inp').value = '';

  if (Number.isNaN(guess1)) {
    alert('Please Provide a Number');
  } else if (1 > guess1 || guess1 >= 10) {
    alert('Please Provide a Number within  the Range 1 to 9');
  } else {
    count = count + 1;
    check(guess1);

    console.log(count);
  }

  function check(guess1) {
    console.log('count' + count);

    if (count <= 3) {
      if (guess1 == cA) {
        results = 'you won!';
        document.querySelector('#result').innerHTML = results;
        document.querySelector('#result').style.backgroundColor = 'green';
        var btn = document.createElement('BUTTON');
        btn.className = 'btn btn-success';
        btn.setAttribute('id', 'pl');
        btn.innerHTML = 'PLAY AGAIN';
        document.querySelector('#play').appendChild(btn);
        document.querySelector('#pl').addEventListener('click', page);
      } else if (guess1 < cA) {
        alert(`The Correct Answer is Larger Than you Think!`);
        let change = `Enter Your Guess no ${count}!`;
        document.querySelector('.change').innerHTML = change;
      } else {
        alert(`The Correct Answer is Smaller Than you Think!`);
        let change = `Enter Your Guess no ${count}!`;
        document.querySelector('.change').innerHTML = change;
      }
    } else if (count == 4 && guess1 != cA) {
      results = 'You Lose';
      document.getElementById('inp').value = '';
      document.querySelector('#result').innerHTML = results;
      document.querySelector('#result').style.backgroundColor = 'red';
      var btn = document.createElement('BUTTON');
      btn.className = 'btn btn-warning';
      btn.setAttribute('id', 'pl');
      btn.innerHTML = 'PLAY AGAIN';
      document.querySelector('#play').appendChild(btn);
      document.querySelector('#pl').addEventListener('click', page);
    } else {
      results = 'you won!';
      document.querySelector('#result').innerHTML = results;
      document.querySelector('#result').style.backgroundColor = 'green';
      var btn = document.createElement('BUTTON');
      btn.className = 'btn btn-success';
      btn.setAttribute('id', 'pl');
      btn.innerHTML = 'PLAY AGAIN';
      document.querySelector('#play').appendChild(btn);
      document.querySelector('#pl').addEventListener('click', page);
    }
  }
}

function page() {
  window.location.reload();
}
