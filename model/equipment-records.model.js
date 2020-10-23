const { Sequelize, Model, DataTypes } = require("sequelize");
const { configure } = require("sequelize-pg-utilities");
const config = require("../config/config.json");
const { name, user, password, options } = configure(config);
const sequelize = new Sequelize(name, user, password, options);

let equipmentRecordModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
	},
	equipment: {
		type: DataTypes.STRING(50),
		allowNull: false,
		primaryKey: true,
	},
	system_status: {
		type: DataTypes.STRING(50),
	},
	superord_equip: {
		type: DataTypes.STRING(50),
	},
	material_description: {
		type: DataTypes.STRING(500),
	},
	plant: {
		type: DataTypes.STRING(10),
	},
	maint_plant: {
		type: DataTypes.STRING(10),
	},
	storage_location: {
		type: DataTypes.STRING(50),
	},
	asset: {
		type: DataTypes.STRING(50),
	},
	subnumber: {
		type: DataTypes.STRING(50),
	},
	work_center: {
		type: DataTypes.STRING(50),
	},
	equip_category: {
		type: DataTypes.STRING(50),
	},
	object_type: {
		type: DataTypes.STRING(50),
	},
	main_work_ctr: {
		type: DataTypes.STRING(50),
	},
	cost_center: {
		type: DataTypes.STRING(50),
	},
	cost_center_description: {
		type: DataTypes.STRING(500),
	},
	tech_ident_no: {
		type: DataTypes.STRING(50),
	},
	model_number: {
		type: DataTypes.STRING(50),
	},
	location: {
		type: DataTypes.STRING(500),
	},
	sort_field: {
		type: DataTypes.STRING(50),
	},
	sales_order: {
		type: DataTypes.STRING(50),
	},
	room: {
		type: DataTypes.STRING(150),
	},
	room_description: {
		type: DataTypes.STRING(150),
	},
	region: {
		type: DataTypes.STRING(50),
	},
	division: {
		type: DataTypes.STRING(50),
	},
	functional_loc: {
		type: DataTypes.STRING(50),
	},
	inventory_no: {
		type: DataTypes.STRING(500),
	},
	size_dimens: {
		type: DataTypes.STRING(50),
	},
	gross_weight: {
		type: DataTypes.DECIMAL(10, 3),
	},
	weight_unit: {
		type: DataTypes.STRING(10),
	},
	startup_date: {
		type: DataTypes.DATE,
	},
	acquistion_date: {
		type: DataTypes.DATE,
	},
	delivery_date: {
		type: DataTypes.DATE,
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

// extend and init model for equipment records
class EquipmentRecord extends Model {}
EquipmentRecord.init(equipmentRecordModel, {
	sequelize,
	modelName: "Equipment",
	tableName: "equipment_record",
	timestamps: false,
});
EquipmentRecord.sync();

module.exports = EquipmentRecord;
