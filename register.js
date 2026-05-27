const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

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

/* VALIDASI */
registerForm.addEventListener("submit", function(e){

  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const check = document.getElementById("check").checked;

  if(
    nama === "" ||
    email === "" ||
    phone === "" ||
    password.value === ""
  ){

    message.innerHTML = "Semua kolom wajib diisi!";
    return;

  }

  if(check === false){
    message.innerHTML =
    "Kamu harus menyetujui syarat & ketentuan!";

    return;

  }

  window.location.href = "login.html";

});