"use strict";

const { MoleculerClientError } = require("moleculer").Errors;
const EquipmentRecord = require("../model/equipment-records.model");
const EquipmentTag = require("../model/equipment-tags.model");
//const GlobalConfiguration = require("../model/global-configurations.model");

module.exports = {
	name: "equipment",


	actions: {
		get: {
			rest: "GET /:id",
			params: {
				id: "string",
			},
			async handler(ctx) {
				const serialNumber = ctx.params.id;
				let equipments = null;
				try{
					equipments = await EquipmentRecord.findAll({
						where : {equipment : serialNumber}
					});
				}catch(error){
					throw new Error(error);
				}
				return equipments;
			},
		},

		post:{
			rest:"POST /",

			async handler(ctx){
				let equipment = null;
				try{
					equipment = await EquipmentRecord.create({
						equipment: ctx.params.equipment
					});
				}catch(error){
					throw new Error(error);
				}

				return equipment;
			}
		}
	},

	
	methods: {

	},
};


