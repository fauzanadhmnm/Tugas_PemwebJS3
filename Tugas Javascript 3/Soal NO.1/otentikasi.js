const failLogin = () => alert("username atau password salah")

const successLogin = () => {
    console.log("username benar");
    location.href = "hasil.html";
};

const login = () => {
    const username = document.getElementById("nama").value;
    const pass = document.getElementById("password").value;
    console.log(username);
    console.log(pass);
    if (username === 'ahmad2017' && pass === 'integrity') {
        successLogin();
    } else {
        failLogin()
    }
}