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

// Wyświetlenie kluczy, ale z każdego elementu z tablicy, w tej sytuacji 4 razy To był błąd
// let employersHeader = employeers.forEach(function(employee){
//   console.log(Object.keys(employee));
// })
 
// W związku z tym, że każdy klucz jest taki sam trzeba wyświetlić tylko jeden raz. Dlatego pobieram klucze z pierwszego elementu tablicy employeers
// console.log(Object.keys(employeers[0]));

function fillEmployeeTable(employeers){
  let employersDOM = document.querySelector(".employeers");  

  let employersHeaders = Object.keys(employeers[0]);
  let employersHeadersLength = employersHeaders.length;

    for (let i = 0; i < employersHeadersLength; i++) {
       console.log(employersHeaders[i]);
    }

  console.log(employersHeaders);

  let employersTableHeaders = "";
}



fillEmployeeTable(employeers);













