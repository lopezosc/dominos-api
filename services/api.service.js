"use strict";
const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	settings: {
		// Exposed port
		port: process.env.PORT || 3000,

		// Exposed IP
		ip: "0.0.0.0",

		// Global CORS settings for all routes
		cors: {
			origin: "*",
			methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
			allowedHeaders: [],
			exposedHeaders: [],
			credentials: false,
			maxAge: 3600,
		},

		routes: [
			{
				path: "/api",

				whitelist: ["**"],

				cors: {
					origin: "*",
					methods: ["GET", "OPTIONS", "POST", "DELETE"],
					credentials: true,
				},

				// The auto-alias feature allows you to declare your route alias directly in your services.
				autoAliases: true,

				aliases: {
					
					"GET purchases/:id":"purchases.get",
					"POST crash-logs/add": "crash-logs.addLog",
					"GET notifications/count/:ssoId":
						"notifications.unreadCount",
					"GET notifications/get-list/:ssoId":
						"notifications.getList",
					"POST notifications/mark-as-read":
						"notifications.markAsRead",
				},

				callingOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB",
					},
					urlencoded: {
						extended: true,
						limit: "1MB",
					},
				},

				mappingPolicy: "all",

				logging: true,
			},
		],

		assets: {
			folder: "public",
			options: {},
		},
	},
};
