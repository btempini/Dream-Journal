const sequelize = require("../config/connection");
const Dream = require("../models/Dream");
const Nightmare = require("../models/Nightmare");
const User = require("../models/User");
const nightmareData = require("./nightmare-seeds.json");
const dreamData = require("./dream-seeds.json");
const userData = require("./user-seeds.json");

const dreamDatabase = async () => {
  await Dream.bulkCreate(dreamData, {
    individualHooks: true,
    returning: true,
  });
};

const nightmareDatabase = async () => {
  await Nightmare.bulkCreate(nightmareData, {
    individualHooks: true,
    returning: true,
  });
};

const userDatabase = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await userDatabase();
  await dreamDatabase();
  await nightmareDatabase();
  process.exit(0);
};

seedAll();
