// enable if you want to login everytime browser is opended.
// browser.runtime.onStartup.addListener(function() {
//     browser.tabs.create({ "url": "https://gateway.iitmandi.ac.in/facstaff/login.php" });
// });

browser.browserAction.onClicked.addListener(function(activeTab)
{
    browser.tabs.create({ "url": "https://gateway.iitmandi.ac.in/facstaff/login.php" });
});

const echo = (command) => {
	console.log("Command : ", command);
	if (command === "login") { 
		browser.tabs.create({ "url": "https://gateway.iitmandi.ac.in/facstaff/login.php" });
    }
}

browser.commands.onCommand.addListener(echo);
