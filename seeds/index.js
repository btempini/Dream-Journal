const sequelize = require("../config/connection");
const Dream = require('../models/Dream')
const nightmareData = require("../models/Nightmare")
const dreamData = require("./dream-seeds.json");

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

dreamDatabase();
nightmareDatabase();
