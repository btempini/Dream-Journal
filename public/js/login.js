var loginBtn = document.getElementById("loginBtn");
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

