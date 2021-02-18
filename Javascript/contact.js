window.onload = setForm;
function setForm() {
  document.forms[0].onsubmit = function() {
    if (this.checkValidity()) alert("Your form have been submitted sucessfully.");
    return false;
  }
}