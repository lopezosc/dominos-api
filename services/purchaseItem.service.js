

"use strict";

const { MoleculerClientError } = require("moleculer").Errors;
const PurchaseItem = require("../model/purchase-item.model");

//const GlobalConfiguration = require("../model/global-configurations.model");

module.exports = {
	name: "purchases",

	actions: {
		get: {
			rest: "GET /:id",
			params: {
				id: "string",
			},
			async handler(ctx) {
				const id = ctx.params.id;
				let purchases = null;
				try{
					purchases = await PurchaseItem.findAll({
						where : {id : id}
					});
				}catch(error){
					throw new Error(error);
				}
				return purchases;
			},
		},
	},

	methods: {

	},
};

