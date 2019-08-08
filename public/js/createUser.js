firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("post_login").style.display = "block";
        const user = firebase.auth().currentUser;

        if (user != null) {
            const email_id = user.email;
            document.getElementById("userParagraph").innerHTML = "Welcome to CNCM, " + email_id;
        }
    }
    else {
        document.getElementById("login").style.display = "block";
        document.getElementById("post_login").style.display = "none";
    }
});

function createUser() {
    const email = document.getElementById("email_field").value;
    const pass = document.getElementById("pass_field").value;

    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        if (error.code == 'auth/weak-password') {
            document.getElementById("error").innerHTML = 'The password is too weak';
        } else {
            document.getElementById("error").innerHTML = error.message;
        }
    });
}

function redir() {
    window.location.replace("https://cncmath.org/index.html");
}