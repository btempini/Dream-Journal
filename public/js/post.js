var postButton = document.getElementById("postBtn");
postButton.addEventListener("click", post);

async function post(){
    var titleInput = document.getElementById("title-input")
    var descriptionInput = document.getElementById("description-input")
    var dreamType = document.getElementById("dreamType")
    var title_Input = titleInput.value;
    var description_Input = descriptionInput.value;
    var dream_Type = dreamType.value;
    console.log(
        title_Input, 
        description_Input, 
        dream_Type, 
        );
        
if (
    title_Input && 
    description_Input && 
    dream_Type) 
    {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ 
        title: title_Input, 
        description: description_Input,
        
    }),
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

// console.log("jdhas")

// const { post } = require("../../controllers/api/dream-routes");
// // var postBtn = document.getElementById("postBtn");
// const db = require("../../controllers/api/dream-routes")

// async function getDreams(){
//     const dreamData = await db.query("SELECT title, description, user_id FROM dream");

//     return {
//         dreamData    
//     }
// }

// module.exports = {getDreams}