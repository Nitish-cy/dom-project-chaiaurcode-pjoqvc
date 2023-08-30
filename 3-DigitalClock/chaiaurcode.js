const cl = document.querySelector('#clock');
//console.log(cl);
setInterval(function () {
  const date = new Date();
  //console.log(date.toLocaleTimeString());
  cl.innerHTML = date.toLocaleTimeString();
}, 1000);
