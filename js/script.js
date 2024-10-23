const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');

// Function to validate first and last name
function validateName(input, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    if (input.value.trim() === '') {
        input.classList.add('invalid');
        errorElement.style.display = 'block';
        return false;
    } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
        return true;
    }
}

// Function to validate email
function validateEmail(input) {
    const errorElement = document.getElementById('email-error');
    const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/;
    if (!emailPattern.test(input.value.trim())) {
        input.classList.add('invalid');
        errorElement.style.display = 'block';
        return false;
    } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
        return true;
    }
}

// Function to validate phone number
function validatePhone(input) {
    const errorElement = document.getElementById('phone-error');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(input.value.trim())) {
        input.classList.add('invalid');
        errorElement.style.display = 'block';
        return false;
    } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
        return true;
    }
}

// Function to validate password
function validatePassword(input) {
    const errorElement = document.getElementById('password-error');
    if (input.value.length < 8) {
        input.classList.add('invalid');
        errorElement.style.display = 'block';
        return false;
    } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
        return true;
    }
}

// Real-time validation for each field
document.getElementById('first-name').addEventListener('input', function () {
    validateName(this, 'first-name-error');
});

document.getElementById('last-name').addEventListener('input', function () {
    validateName(this, 'last-name-error');
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail(this);
});

document.getElementById('phone').addEventListener('input', function () {
    validatePhone(this);
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword(this);
});


// Show toast notification function
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(function () {
        toast.classList.remove('show');
    }, 5000); // Toast visible for 3 seconds
}

// Final form submission validation
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform final validation before submission
    const isFirstNameValid = validateName(document.getElementById('first-name'), 'first-name-error');
    const isLastNameValid = validateName(document.getElementById('last-name'), 'last-name-error');
    const isEmailValid = validateEmail(document.getElementById('email'));
    const isPhoneValid = validatePhone(document.getElementById('phone'));
    const isPasswordValid = validatePassword(document.getElementById('password'));

    // If all validations pass, log the form data
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        const formData = {
            first_name: document.getElementById('first-name').value.trim(),
            last_name: document.getElementById('last-name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone_number: document.getElementById('phone').value.trim(),
            password: document.getElementById('password').value
        };

        console.log(formData);
        showToast();
    }

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';


});
