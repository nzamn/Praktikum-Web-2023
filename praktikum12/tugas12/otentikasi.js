function Login() {
    //Tangkap data Username & Password
    let user = document.getElementById("username").value;
    let pw = document.getElementById("password").value;

    //Cek Username & Password
    if (user === "admin" && pw === "admin321") {
        alert("Login Berhasil");
    } else {
        alert("Login Gagal.coba lagi");
    }
}