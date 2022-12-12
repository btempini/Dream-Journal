const sequelize = require("../config/connection");
const Dream = require("../models/Dream");
const Nightmare = require("../models/Nightmare");
const User = require("../models/User");
const nightmareData = require("./nightmare-seeds.json");
const dreamData = require("./dream-seeds.json");
const userData = require("./user-seeds.json");

const dreamDatabase = async () => {
  await sequelize.sync({ force: true });

  await Dream.bulkCreate(dreamData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
const nightmareDatabase = async () => {
  await sequelize.sync({ force: true });

  await Nightmare.bulkCreate(nightmareData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
const userDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

dreamDatabase();
nightmareDatabase();
userDatabase();
