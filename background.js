// enable if you want to login everytime browser is opended.
// chrome.runtime.onStartup.addListener(function() {
//     chrome.tabs.create({ "url": "https://gateway.iitmandi.ac.in/facstaff/login.php" });
// });

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.create({ "url": "https://gateway.iitmandi.ac.in/facstaff/login.php" });
});

const echo = (command) => {
	console.log("Command : ", command);
	if (command === "login") { 
		chrome.tabs.create({ "url": "https://gateway.iitmandi.ac.in/facstaff/login.php" });
    }
}

chrome.commands.onCommand.addListener(echo);
