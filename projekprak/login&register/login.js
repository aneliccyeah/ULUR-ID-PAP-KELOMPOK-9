const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

  if(password.type === "password"){

    password.type = "text";

    // Ganti icon jadi mata biasa
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");

  }else{

    password.type = "password";

    // Ganti icon jadi mata terslash
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");

  }

});

loginForm.addEventListener("submit", function(e){

  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = password.value;

  // VALIDASI
  if(email === "" || pass === ""){

    message.innerHTML = "Semua kolom wajib diisi!";
    return;

  }

  // PINDAH PAGE
window.location.href = "../dashboard/index.html";

});
