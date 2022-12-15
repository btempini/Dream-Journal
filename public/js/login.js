var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");
loginBtn.addEventListener("click", login);


async function login(){
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var email = loginEmail.value;
    var password = loginPassword.value;
    console.log(email, password);

if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      
      console.log("loggedIn")
      document.location.replace('/loggedIn');
    } else {
      alert(response.statusText);
    }
  }
}

signupBtn.addEventListener("click", signup);
async function signup(){
    var signupFirstName = document.getElementById("signupFirstName");
    var signupLastName = document.getElementById("signupLastName");
    var signupEmail = document.getElementById("signupEmail");
    var signupUserName = document.getElementById("signupUserName");
    var signupPassword = document.getElementById("signupPassword");
    var signFirstName = signupFirstName.value;
    var signLastName = signupLastName.value;
    var signEmail = signupEmail.value;
    var signUserName = signupUserName.value;
    var signPassword = signupPassword.value;
    console.log(signFirstName, signPassword, signEmail, 
        signUserName, signPassword);

if (signFirstName && signLastName && signEmail && 
    signUserName && signPassword) {
    // Send a POST request to the API endpoint
    console.log(signFirstName)
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ 
        first_name: signFirstName, 
        last_name: signLastName,
        password: signPassword, 
        email: signEmail,
        username: signUserName
    }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      
      console.log("SignUp is succesful")
      document.location.replace('/loggedIn');
    } else {
      alert(response.statusText);
    }
  }
}

