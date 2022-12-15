var postButton = document.getElementById("postBtn");
postButton.addEventListener("click", post);

async function post(event){
    event.preventDefault();
    var titleInput = document.getElementById("title-input")
    var descriptionInput = document.getElementById("description-input")
    var dreamType = document.getElementById("dream")
    var nightType = document.getElementById("nightmare")
    var title_Input = titleInput.value;
    var description_Input = descriptionInput.value;
    var dream_Type = dreamType.checked;
    var nightmare_Type = nightType.checked;
    console.log(
        title_Input, 
        description_Input, 
        dream_Type,
        nightmare_Type 
        );
        
     if (dream_Type) {
        
          if (
    title_Input && 
    description_Input && 
    dream_Type ||
    nightmare_Type) 
    {
    // Send a POST request to the API endpoint
    const dream = await fetch('/api/post/dream', {
      method: 'POST',
      body: JSON.stringify({ 
        title: title_Input, 
        description: description_Input,
        
    }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (dream.ok) {
      // If successful, redirect the browser to the profile page
      
      console.log("loggedIn")
      document.location.replace('/loggedIn');
    } else {
      alert(dream.statusText);
    }
  }



     } else {

        const nightmare = await fetch('/api/post/nightmare', {
      method: 'POST',
      body: JSON.stringify({ 
        title: title_Input, 
        description: description_Input,
        
    }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (nightmare.ok) {
      // If successful, redirect the browser to the profile page
      
      console.log("loggedIn")
      document.location.replace('/loggedIn');
    } else {
      alert(nightmare.statusText);
    }




     }

// if (
//     title_Input && 
//     description_Input && 
//     dream_Type ||
//     nightmare_Type) 
//     {
//     // Send a POST request to the API endpoint
//     const dream = await fetch('/api/post/dream', {
//       method: 'POST',
//       body: JSON.stringify({ 
//         title: title_Input, 
//         description: description_Input,
        
//     }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (dream.ok) {
//       // If successful, redirect the browser to the profile page
      
//       console.log("loggedIn")
//       // document.location.replace('/loggedIn');
//     } else {
//       alert(dream.statusText);
//     }
//   }
// }

// // Send a POST request to the API endpoint
//     const nightmare = await fetch('/api/post/nightmare', {
//       method: 'POST',
//       body: JSON.stringify({ 
//         title: title_Input, 
//         description: description_Input,
        
//     }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (nightmare.ok) {
//       // If successful, redirect the browser to the profile page
      
//       console.log("loggedIn")
//       // document.location.replace('/loggedIn');
//     } else {
//       alert(nightmare.statusText);
//     }
// console.log("jdhas")
    }
