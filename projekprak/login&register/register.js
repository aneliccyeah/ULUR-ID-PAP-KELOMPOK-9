const registerForm =
document.getElementById("registerForm");

const message =
document.getElementById("message");

const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

/* SHOW PASSWORD */
togglePassword.addEventListener("click", () => {

  if(password.type === "password"){
    password.type = "text";

    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");

  }else{
    password.type = "password";

    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  }

});

/* TERMS POPUP */
const termsPopup =
document.getElementById("termsPopup");

const openTerms =
document.getElementById("openTerms");

const closeTerms =
document.getElementById("closeTerms");

/* OPEN */
openTerms.addEventListener("click", () => {
  termsPopup.style.display = "flex";
});

/* CLOSE */
closeTerms.addEventListener("click", () => {
  termsPopup.style.display = "none";
});

/* CLOSE OUTSIDE */
window.addEventListener("click", (e) => {
  if(e.target === termsPopup){
    termsPopup.style.display = "none";
  }

});

/* VALIDASI */
registerForm.addEventListener("submit", function(e){

  e.preventDefault();

  const nama =
  document.getElementById("nama").value.trim();

  const email =
  document.getElementById("email").value.trim();

  const phone =
  document.getElementById("phone").value.trim();

  const check =
  document.getElementById("check").checked;

  message.innerHTML = "";

  /* VALIDASI KOSONG */
  if(
    nama === "" ||
    email === "" ||
    phone === "" ||
    password.value === ""
  ){

    message.innerHTML =
    "Semua kolom wajib diisi!";

    return;

  }

  /* VALIDASI PASSWORD */
  if(password.value.length < 6){
    message.innerHTML =
    "Password minimal 6 karakter!";
    return;
  }

  /* VALIDASI CHECKBOX */
  if(check === false){
    message.innerHTML =
    "Kamu harus menyetujui syarat & ketentuan!";
    return;
  }

  /* SUKSES */
  alert("Registrasi berhasil!");

  window.location.href = "login.html";

});