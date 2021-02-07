


const selectElement = document.querySelector('.phn-email');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  myresult = `${event.target.value}`;
  document.getElementById("emailPhone").innerHTML = "<label>Enter your "+myresult+"</label><input type='text' name="+myresult+">";
   
});