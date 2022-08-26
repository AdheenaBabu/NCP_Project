// function for form validation for addService form
function validateServiceForm() {
    var serviceName = document.forms["addService"]["serviceName"].value;
    var servicePrice = document.forms["addService"]["servicePrice"].value;
    var serviceDescription = document.forms["addService"]["serviceDescription"].value;
    var serviceDuration = document.forms["addService"]["serviceDuration"].value;

    if (serviceName == "") {
        alert("Service name must be filled out");
        return false;
    }
    if (servicePrice == "") {
        alert("Service price must be filled out");
        return false;
    }
    if (serviceDuration == "") {
        alert("Service duration must be filled out");
        return false;
    }
    alert("Service added successfully");
    return true;
}

// function for form validation for addEmployee form
function validateEmployeeForm() {
    var firstName = document.forms["addEmployee"]["firstName"]?.value;
    var lastName = document.forms["addEmployee"]["lastName"]?.value;
    var email = document.forms["addEmployee"]["email"]?.value;
    var phone = document.forms["addEmployee"]["phone"]?.value;
    var address = document.forms["addEmployee"]["address"]?.value;
    var city = document.forms["addEmployee"]["city"]?.value;
    var state = document.forms["addEmployee"]["state"]?.value;
    var zip = document.forms["addEmployee"]["zip"]?.value;
    var password = document.forms["addEmployee"]["password"]?.value;
    var confirmPassword = document.forms["addEmployee"]["confirmPassword"]?.value;
    var role = document.forms["addEmployee"]["role"]?.value;
    var hourlyRate = document.forms["addEmployee"]["hourlyRate"]?.value;
    var service = document.forms["addEmployee"]["service"]?.value;
    var startDate = document.forms["addEmployee"]["startDate"]?.value;
    var endDate = document.forms["addEmployee"]["endDate"]?.value;
    var hourlyRate = document.forms["addEmployee"]["hourlyRate"]?.value;
    var service = document.forms["addEmployee"]["service"]?.value;

    console.log(firstName);
    console.log(lastName);

    if (firstName == "") {
        alert("First name must be filled out");
        return false;
    }
    if (lastName == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (phone == "") {
        alert("Phone must be filled out");
        return false;
    }
    if (address == "") {
        alert("Address must be filled out");
        return false;
    }
    alert("Employee added successfully");
    return true;
}

// function for form validation
function validateForm() {
    var x = document.forms["formGeneric"][0].value;
    if (x == "") {
        alert("All fields must be filled out");
        return false;
    }
}


