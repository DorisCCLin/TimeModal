var timeModal= document.querySelector('.timeModal');
var cancel = document.querySelector('#cancel');

setTimeout(open, 5000);

function open(){	
	timeModal.style.display = "block";
}

cancel.addEventListener('click', close)

function close(){
    timeModal.style.display = "none";
}

