const { Sequelize, Model, DataTypes } = require("sequelize");
const { configure } = require("sequelize-pg-utilities");
const config = require("../config/config.json");
const { name, user, password, options } = configure(config);
const sequelize = new Sequelize(name, user, password, options);



let purchaseItemModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey:true
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,

	}
};

// extend and init model for user
class PurchaseItem extends Model {}
PurchaseItem.init(purchaseItemModel, {
	sequelize,
	modelName: "PurchaseItem",
	tableName: "PurchaseItem",
	timestamps: false,
});
PurchaseItem.sync();

module.exports = PurchaseItem;

