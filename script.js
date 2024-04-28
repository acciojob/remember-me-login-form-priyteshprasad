//your JS code here. If required.
// Check is credentials are saved or not;
// console.log("line 3",localStorage)

function showLoginUserBtn(){
	if(localStorage.getItem('username') && localStorage.getItem('password')){
		// show buttun for logging as existing customer
		let existingBtn = document.createElement('button');
		existingBtn.setAttribute('id', 'existing')
		existingBtn.textContent = 'Login as existing user';
		document.body.appendChild(existingBtn);
	
		//add action/eventListner to existing btn
		existingBtn.addEventListener('click', ()=>{
			alert('Logged in as '+ localStorage.getItem('username'))
		})
	}
}
showLoginUserBtn()

// add even listener to login form
document.getElementById('loginform').addEventListener('submit', (event)=>{
	event.preventDefault();
	// console.log(event)

	// get the values
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const rememberMe = document.getElementById('checkbox').value;
	if(username.trim() !== "" && password.trim() !== ""){
		if(rememberMe){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		}else{
			localStorage.setItem('username', null)
			localStorage.setItem('password', null)
		}
		alert('Logged in as '+ username)
	}
	// showLoginUserBtn()
	
})
