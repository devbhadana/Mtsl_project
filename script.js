var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
	validateForm();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}
function validateForm(){
	var salary = document.getElementById('salary').value;
	var salaryRegex = /^\d+$/;

	if (!salaryRegex.test(salary) || salary <= 0) {
                alert('Invalid salary. Please enter a positive number for salary.');
                return false;
	}
	return true;
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["empCode"] = document.getElementById("empCode").value;
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.empCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.contact;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.salary;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("empCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.empCode;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.contact;
    selectedRow.cells[4].innerHTML = formData.salary;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("empCode").value = '';
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("salary").value = '';
    selectedRow = null;
}
