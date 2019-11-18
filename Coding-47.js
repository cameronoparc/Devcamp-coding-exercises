// Coding Exercise
// There are 2 syntax errors in the below code. Find and fix them to make the test pass
function adminActions(func) {
	return func();
}

try {
	console.log(adminActions(buttons));
} catch(e) {
	console.log('No admin is logged in', e);
}

buttons = () => {
	return '<button>Admin Dashboard</button>';
}
console.log(adminActions(buttons));