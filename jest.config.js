module.exports = {
	reporters: [
		"default",
		[
			"./node_modules/jest-html-reporter",
			{
				pageTitle: "Test Report",
				outputPath: "test-report/index.html",
				includeFailureMsg: true,
				includeSuiteFailure: true,
				includeConsoleLog: true,
				includeObsoleteSnapshots: true,
				testResultsProcessor: "./node_modules/jest-html-reporter",
			},
		],
	],
};
