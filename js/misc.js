var adConsentCheckbox = document.getElementById("adConsent");

adConsentCheckbox.checked = localStorage.getItem("adConsent") === 'true';

adConsentCheckbox.addEventListener('change', function () {
  localStorage.setItem("adConsent", this.checked);
  console.log("Ad consent status: " + this.checked);
  alert("Changes saved.");
});

var adStatus = adConsentCheckbox.checked;
