function createEmployee(firstName, lastName, age, sex, employed){
  return{
    firstName: firstName,
    lastName: lastName,
    age: age,
    sex: sex,
    employed: employed
  }
} 
let employeers = []; 
employeers.push(createEmployee("John", "Doe", "31", "male", true));
employeers.push(createEmployee("Amelia", "Clark", "21", "female", true));
employeers.push(createEmployee("Jack", "Jones", "31", "male", true));
employeers.push(createEmployee("Olivia", "Wilde", "26", "male", true));


function fillEmployeeTable(employeers){
  let employersDOM = document.querySelector(".employeers");
  let tabHead = employersDOM.querySelector(".table__head").querySelector(".table__row");
  let tabBody = employersDOM.querySelector(".table__body").querySelector(".table__row");
  console.log(tabHead);

  function showKeyName(){ 
    let employersHeaders = Object.keys(employeers[0]); // Pobranie nazw kluczy obiektu 
    let employersHeadersLength = employersHeaders.length; // Pobranie długości klucza
   
    let th = "";
    for (let i = 0; i < employersHeadersLength; i++) {       // Przeiterowanie każdego elementu 
      th = document.createElement('th');
      th.setAttribute("scope", "col");
      th.classList.add("table__head--item"); 
      th.textContent = employersHeaders[i].toLocaleUpperCase();
  
      tabHead.appendChild(th);
      console.log(th);   
    }
  }

  function fillCels(employeers){
    console.log(employeers.values(employee))
  }

  showKeyName();
  fillCels();
}

fillEmployeeTable(employeers);













