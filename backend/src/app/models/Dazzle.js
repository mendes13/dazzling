import Sequelize, { Model } from 'sequelize';

class Dazzle extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        interface_url: Sequelize.STRING,
        repo_url: Sequelize.STRING,
        logic_url: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.File, { foreignKey: 'logo_id', as: 'logo' });
    this.hasMany(models.Stack, { foreignKey: 'dazzle_id', as: 'stack' });
  }
}

export default Dazzle;
