//Check if Loaded
console.log("App.JS loaded.")

// Get the terms and conditions modal
var termsModal = document.getElementById("termsModal");

// Get the privacy policy modal
var privacyModal = document.getElementById("privacyModal");

// Get the checkbox for terms and conditions
var termsCheckbox = document.getElementById("termsCheckbox");

// Get the checkbox for privacy policy
var privacyCheckbox = document.getElementById("privacyCheckbox");

// When the user clicks the checkbox for terms and conditions, fetch the contents of the file and display it in the modal
termsCheckbox.onclick = function() {
    if (this.checked) {
    fetch("termsandconditions.txt")
        .then(response => response.text())
        .then(text => {
            document.getElementById("termsContent").innerHTML = text;
            termsModal.style.display = "block";
        })
    }
}

// When the user clicks the checkbox for privacy policy, fetch the contents of the file and display it in the modal
privacyCheckbox.onclick = function() {
    if (this.checked) {
    fetch("privacypolicy.txt")
        .then(response => response.text())
        .then(text => {
            document.getElementById("privacyContent").innerHTML = text;
            privacyModal.style.display = "block";
        })
    }
}

// When the user clicks the close button on the terms and conditions modal, close it
var termsClose = document.getElementById("termsClose");
termsClose.onclick = function() {
    termsModal.style.display = "none";
}

// When the user clicks the close button on the privacy policy modal, close it
var privacyClose = document.getElementById("privacyClose");
privacyClose.onclick = function() {
    privacyModal.style.display = "none";
}
