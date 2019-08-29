import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Dazzle from '../app/models/Dazzle';
import Tech from '../app/models/Tech';
import Stack from '../app/models/Stack';

const models = [User, File, Dazzle, Tech, Stack];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
