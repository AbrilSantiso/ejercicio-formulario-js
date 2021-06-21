const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  // 2. Obtenemos los datos ingresados en el input de password
  // 3. Obtenemos el valor del input radio
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  var email = document.getElementById("email-input").value;
  var password = document.getElementById("password-input").value;
  var legalAge = document.getElementsByName("legalAge");
  var termsAndConditions = document.getElementById("tyc-input");
  function checkingAge() {
    let check = null;
    legalAge.forEach(function (radio) {
      if (radio.id == "age_no" && radio.checked) {
        alert("Debes ser mayor de edad para registrarte en el sitio");
        check = "false";
      } else {
        check = "true";
      }
    });
    return check;
  }
  function checkingTerms() {
    if (!termsAndConditions.checked) {
      window.alert("Debes aceptar los TyCs para registrarte en el sitio");
    }
    return termsAndConditions.checked;
  }

  let data = {
    email: email,
    password: password,
    legalAge: checkingAge(),
    tycAccepted: checkingTerms(),
  };
  console.log(data);
});
