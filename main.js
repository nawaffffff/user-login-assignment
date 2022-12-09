document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful");
    } else if (username !== "admin") {
        alert("Incorrect Username");
    } else alert("Invalid Password")
}
