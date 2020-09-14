// this is my auth.js file
const signupButton = document.getElementById('submit-sign-up');
const signupUsername = document.getElementById('sign-up-username');
const signupEmail = document.getElementById('sign-up-email');
const signupPassword = document.getElementById('sign-up-password');

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