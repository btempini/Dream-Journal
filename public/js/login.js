const { user } = require("../../controllers/api/user-routes");
// var postBtn = document.getElementById("postBtn");
const db = require("../../controllers/api/user-routes")

async function userLogin(){
    const userData = await db.query("SELECT id, first_name, last_name, email, username, password FROM user");

    return {
        userData    
    }
}

module.exports = {userLogin}