const form = document.querySelector('form');

//console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector('#height').value);
  // console.log(h);
  const w = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (h === '' || isNaN(h) || h < 0) {
    results.innerHTML = 'please Enter a valid number';
  } else if (w === '' || isNaN(w) || w < 0) {
    results.innerHTML = 'please Enter a valid number';
  } else {
    const BMI = (w / ((h * h) / 10000)).toFixed(2);
    results.innerHTML = BMI;
  }
});
