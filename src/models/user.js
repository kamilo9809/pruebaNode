import { sequelize } from "../config/sequalizeConfig.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

const user = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


user.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

user.beforeUpdate(async (user)=>{
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
})

export default user