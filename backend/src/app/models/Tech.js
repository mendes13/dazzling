import Sequelize, { Model } from 'sequelize';

class Tech extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        hex_color: Sequelize.STRING,
      },
      {
        sequelize: connection,
        tableName: 'techs',
      }
    );

    return this;
  }
}

export default Tech;
