let form = document.getElementById("form")
let form2 = document.getElementById("form2")
let spin = document.getElementById("spin")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let userName = document.getElementById("userName")
let InputPassword1 = document.getElementById("InputPassword1")
let InputPassword2 = document.getElementById("InputPassword2")
let city = document.getElementById("city")
let zip = document.getElementById("zip")
let agree = document.getElementById("agree")
let userNameLogin = document.getElementById("userNameLogin")
let InputPasswordLogin = document.getElementById("InputPasswordLogin")
let obj = {
    First_Name: firstName.value,
    Last_Name: lastName.value,
    User_Name: userName.value,
    InputPassword1: InputPassword1.value,
    InputPassword2: InputPassword2.value,
    city: city.value,
    zip: zip.value,
    agree: agree.value
    // userNameLogin: userNameLogin.value,
    // InputPasswordLogin: InputPasswordLogin.value,
}


form2.style.display = "none"



document.getElementById('submit').addEventListener('submit', function (e) {
    e.preventDefault()
        // localStorage.setItem("form", obj)
    localStorage.setItem("Form", JSON.stringify(userName.value));
})

spin.style.display = "none"



spin.style.display = "none"
function login() {
    form.style.display = "none"
    spin.style.display = "block"
    setTimeout(() => {
        spin.style.display = "none"
        form2.style.display = "block"
    }, 2000);
}

function sign_up() {

    form2.style.display = "none"
    spin.style.display = "block"
    setTimeout(() => {
        spin.style.display = "none"
        form.style.display = "block"
    }, 5000);

}

function logins() {
    if (document.getElementById("userNameLogin").value == "" || document.getElementById("InputPasswordLogin").value == "") {
        return;
    }
    else if (userNameLogin == JSON.parse(localStorage.getItem("Form")) && InputPasswordLogin == JSON.parse(localStorage.getItem("Form"))) {
        alert("login successful")
    }
    else {
        window.location.href = "dashboard.html"
    }
}




// const fileInput = document.getElementById('file');
// const previewImage = document.getElementById('profileMe');

// fileInput.addEventListener('change', function () {
//     const file = fileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.readAsDataURL(file);
//         reader.addEventListener('load', function () {
//             previewImage.src = reader.result;
//         });

//     }
// });
