function createEmployee(firstName, lastName, age, sex, employed) {
	return {
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


function fillEmployeeTable() {
	let employersDOM = document.querySelector(".employeers");
	let tabHead = employersDOM.querySelector(".table__head").querySelector(".table__row");

	function showKeyName(employeers) {
		let employersHeaders = Object.keys(employeers[0]); // Pobranie nazw kluczy obiektu 
		let employersHeadersLength = employersHeaders.length; // Pobranie długości klucza

		let th = "";
		for (let i = 0; i < employersHeadersLength; i++) { // Przeiterowanie każdego elementu 
			th = document.createElement('th');
			th.setAttribute("scope", "col");
			th.classList.add("table__head--item");
			th.textContent = employersHeaders[i].toLocaleUpperCase();

			tabHead.appendChild(th);
		}  
			function addIndex() {
				let th = "";
				th = document.createElement('th');
				th.setAttribute("scope", "col");
				th.classList.add("table__head--item");
				th.textContent = "Index".toLocaleUpperCase();

				tabHead.prepend(th);
			}
			addIndex()
	} 

	function fillCels(employeers) {
		let tabBody = employersDOM.querySelector(".table__body");

		tabBody.innerHTML = "";

		employeers.forEach(function(worker, index) { 
			tabBody.innerHTML += `<tr class="table__row">
				<td> ${index += 1} </td>
				<td> ${worker.firstName}</td>   
				<td> ${worker.lastName} </td>   
				<td> ${worker.age} </td>  
				<td> ${worker.sex} </td>  
				<td> ${worker.employed} </td> </tr>
			`; 
			}); 
	} 

	let manBtn = document.querySelector('.btn-man')
	let womanBtn = document.querySelector('.btn-woman')

	womanBtn.addEventListener("click", showWomen);
	manBtn.addEventListener("click", showMan);

	function showMan() { 
		let men = employeers.filter(function (employee, index, arr) {
			return employee.sex === "male";
		});

		fillCels(men);
	}

	function showWomen() {
		let women = employeers.filter(function (employee, index, arr) {
			return employee.sex === "female";
		});

		fillCels(women);
	}
 
	showKeyName(employeers);
	// fillCels(employeers);
}

fillEmployeeTable();


