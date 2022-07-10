module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgeries', {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true,
  });

  return Surgerie;
}