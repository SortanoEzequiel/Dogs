const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true,
    },
    name:{
      type: DataTypes.STRING(20),
    },
    alturaMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    alturaMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
    },
    pesoMin:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pesoMax:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longevidad:{
      type: DataTypes.INTEGER,
    },
    crearInDb:{
      type:DataTypes.BOOLEAN,
    }
  },
  {
    timestamps:false,
  });
};
