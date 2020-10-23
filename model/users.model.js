const { Sequelize, Model, DataTypes } = require("sequelize");
const { configure } = require("sequelize-pg-utilities");
const config = require("../config/config.json");
const { name, user, password, options } = configure(config);
const sequelize = new Sequelize(name, user, password, options);

let userModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
	},
	sso_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
	},
	bh_id: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	business_email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	is_admin: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
	created_by: {
		type: DataTypes.INTEGER,
	},
	created_on: {
		type: DataTypes.DATE,
	},
	modified_by: {
		type: DataTypes.INTEGER,
	},
	modified_on: {
		type: DataTypes.DATE,
	},
};

// extend and init model for user
class User extends Model {}
User.init(userModel, {
	sequelize,
	modelName: "User",
	tableName: "user",
	timestamps: false,
});
User.sync();

module.exports = User;
