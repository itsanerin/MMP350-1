// this is my auth.js file
const signupButton = document.getElementByID('submit-sign-up');
const signupUsername = document.getElementByID('sign-up-username');
const signupEmail = document.getElementByID('sign-up-email');
const signupPassword = document.getElementByID('sign-up-password');

function createUser(){
	const email = signupEmail.value;
	const password = signupPassword.value;
	firebase.auth().createUserWithEmailAndPassword(email, password);
}
signupButton.onclick = createUser;

const promise = auth.createUserWithEmailAndPassword(email, password);
promise.then(updateUser);

function updateUser(credential){
	const userInfo= {
		displayName: signupUsername.value
	};
	credential.user.updateProfile(userInfo);
}

promis.catch(function(error){
	console.log(error);
	alert(error.message);
})