const { Sequelize, Model, DataTypes } = require("sequelize");
const { configure } = require("sequelize-pg-utilities");
const config = require("../config/config.json");
const { name, user, password, options } = configure(config);
const sequelize = new Sequelize(name, user, password, options);

const EquipmentRecord = require("../model/equipment-records.model");

let equipmentTagModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	equipment: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	tag_number: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
	is_active: {
		type: DataTypes.BOOLEAN,
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

// extend and init model for equipment tags
class EquipmentTag extends Model {}
EquipmentTag.init(equipmentTagModel, {
	sequelize,
	modelName: "EquipmentTag",
	tableName: "equipment_tags",
	timestamps: false,
});

// Added association for equipment_records and equipment_tags
// foreign_key for equipment
EquipmentRecord.hasMany(EquipmentTag, {
	// as: "equipment_id",
	foreignKey: "equipment",
	targetKey: "equipment",
});
EquipmentTag.belongsTo(EquipmentRecord, {
	// as: "equipment_id",
	foreignKey: "equipment",
	targetKey: "equipment",
});
EquipmentTag.sync();

module.exports = EquipmentTag;
