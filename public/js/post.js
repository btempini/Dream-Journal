console.log("jdhas")

const { post } = require("../../controllers/api/dream-routes");
// var postBtn = document.getElementById("postBtn");
const db = require("../../controllers/api/dream-routes")

async function getDreams(){
    const dreamData = await db.query("SELECT title, description, user_id FROM dream");

    return {
        dreamData    
    }
}

module.exports = {getDreams}