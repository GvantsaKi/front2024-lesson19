const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const personalNumberInput = document.querySelector("#personal-number");
const mobileNumberInput = document.querySelector("#mobile-number");
const jobDescriptionInput = document.querySelector("#job-description");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const personalNumberError = document.querySelector("#personal-number-error");
const mobileNumberError = document.querySelector("#mobile-number-error");
const jobDescriptionError = document.querySelector("#job-description-error");


function checkUserName() {
	if (nameInput.value.trim() === "") {
		nameError.textContent = "Username is required";
		nameInput.classList.remove("correct");
		nameInput.classList.add("error");
		return false;
	} else {
		nameError.textContent = "";
		nameInput.classList.remove("error");
		nameInput.classList.add("correct");
		return true;
	}
}

function checkEmail() {
	if (emailInput.validity.valid === false) {
		emailError.textContent = "Email is required";

		if (emailInput.validity.typeMismatch) {
			emailError.textContent = "Please enter a valid email address";
		}
		emailInput.classList.remove("correct");
		emailInput.classList.add("error");

		return false;
	} else {
		emailError.textContent = "";
		emailInput.classList.remove("error");
		emailInput.classList.add("correct");
		return true;
	}
}

function checkPassword() {
	if (passwordInput.value.trim() === "") {
		passwordError.textContent = "Password is required";
		passwordInput.classList.remove("correct");
		passwordInput.classList.add("error");
		return false;
	} else if (/[a-zA-Z0-9]/.test(passwordInput.value) === false) {
		passwordError.textContent = "Password must contain numbers or letters";
		passwordInput.classList.remove("correct");
		passwordInput.classList.add("error");
		return false;
	} else if (passwordInput.value.length < 8) {
		passwordError.textContent = "Password must contain at least 8 characters";
		passwordInput.classList.remove("correct");
		passwordInput.classList.add("error");
		return false;
	} else {
		passwordError.textContent = "";
		passwordInput.classList.remove("error");
		passwordInput.classList.add("correct");
		return true;
	}
}

function checkPersonalNumber () {
    if (personalNumberInput.value.trim() === "") {
		personalNumberError.textContent = "Personal Number is required";
		personalNumberInput.classList.remove("correct");
		personalNumberInput.classList.add("error");
		return false;
	} 
      else if( typeof personalNumberInput != 'number'){
        personalNumberError.textContent = "Must contain only numbers";
		personalNumberInput.classList.remove("correct");
		personalNumberInput.classList.add("error");
		return false;
    }
	  else if (personalNumberInput.value.length != 11){
        personalNumberError.textContent = "Must contain only 11 characters";
        personalNumberInput.classList.remove("correct");
		personalNumberInput.classList.add("error");
		return false;
	} else {
		personalNumberError.textContent = "";
		personalNumberInput.classList.remove("error");
		personalNumberInput.classList.add("correct");
		return true;
	}
}

function checkMobileNumber() {
	if (mobileNumberInput.value.trim() === "") {
		mobileNumberError.textContent = "Mobile Number is required";
		mobileNumberInput.classList.remove("correct");
		mobileNumberInput.classList.add("error");
		return false;
	} else if( typeof mobileNumberInput != 'number'){
        mobileNumberError.textContent = "Must contain only numbers";
		mobileNumberInput.classList.remove("correct");
		mobileNumberInput.classList.add("error");
		return false;
    }
	  else if (mobileNumberInput.value.length != 9 ){
        mobileNumberError.textContent = "Must contain only 9 characters";
        mobileNumberInput.classList.remove("correct");
		mobileNumberInput.classList.add("error");
		return false;
	} else {
		mobileNumberError.textContent = "";
		mobileNumberInput.classList.remove("error");
		mobileNumberInput.classList.add("correct");
		return true;
	}
}

function checkJobDescription(){
	if(jobDescriptionInput.value.trim() ==="") {
		jobDescriptionError.textContent = "Job description is required";
		jobDescriptionInput.classList.remove("correct");
		jobDescriptionInput.classList.add("error");
		return false;
	} else if (jobDescriptionInput.value.length > 50 ){
        jobDescriptionError.textContent = "Must not contain more than 50 characters";
		jobDescriptionInput.classList.remove("correct");
		jobDescriptionInput.classList.add("error");
		return false;
    } else {
		jobDescriptionError.textContent = "";
		jobDescriptionInput.classList.remove("error");
		jobDescriptionInput.classList.add("correct");
		return true;
	}

}


nameInput.addEventListener("input", checkUserName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
personalNumberInput.addEventListener("input", checkPersonalNumber);
mobileNumberInput.addEventListener("input", checkMobileNumber);
jobDescriptionInput.addEventListener("input", checkJobDescription);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const isUserNameValid = checkUserName();
	const isEmailValid = checkEmail();
	const isPAsswordValid = checkPassword();
	const isPersonalNumberValid = checkPersonalNumber();
	const isMobileNumberValid = checkMobileNumber();
	const isJobDescriptionValid = checkJobDescription();

	// if true then submit the form

	if (isUserNameValid && isEmailValid && isPAsswordValid && isPersonalNumberValid && isPersonalNumberValid && isJobDescriptionValid) {
		form.submit();
	} else {
		showSelectedModal("#sign-up-error-modal");
	}
});

const openModal = document.querySelector(".open-sign-in");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const dialog = document.querySelector("dialog");

const closeDialog = dialog.querySelector(".modal-close");

openModal.addEventListener("click", () => {
	// modal.classList.add("open");
	// showSelectedModal("#sign-up-modal");

	dialog.show();
});

closeDialog.addEventListener("click", (e) => {
	dialog.close();
});

function showSelectedModal(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	if (modal) {
		modal.classList.add("open");
	}

	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			modal.classList.remove("open");
		});
	}
}
