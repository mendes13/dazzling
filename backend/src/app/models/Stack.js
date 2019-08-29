import Sequelize, { Model } from 'sequelize';

class Stack extends Model {
  static init(connection) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Tech, { foreignKey: 'tech_id', as: 'tech' });
    this.belongsTo(models.Dazzle, { foreignKey: 'dazzle_id', as: 'dazzle' });
  }
}

export default Stack;
