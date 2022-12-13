const User = require("./User");
const Dream = require("./Dream");
const Nightmare = require("./Nightmare");

User.hasMany(Dream, {
  foreignKey: "user_id",
});

Dream.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Nightmare, {
  foreignKey: "user_id",
});

Nightmare.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Dream, Nightmare };
