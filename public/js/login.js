firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        alert("USER");
        document.getElementById("loggedIn").style.display = "block";
        document.getElementById("main").style.display = "none";

        const user = firebase.auth().currentUser;

        if (user != null) {
            const email = user.email;
            window.alert("Welcome, " + email);
        }
    } else {
        document.getElementById("loggedIn").style.display = "none";
        document.getElementById("main").style.display = "block";
    }
});

function login() {
    const email = document.getElementById("email_field").value;
    const pass = document.getElementById("password_field").value;
    try {
        firebase.auth().signInWithEmailAndPassword(email, pass);
    } catch(error) {
        const errormsg = error.message;
        window.alert("Error : " + errormsg);
    }
}

function logout(){
    firebase.auth().signOut();
}

function redirect() {
    window.location.replace("https://cncmath.org/index.html");
}