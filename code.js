let progress = document.getElementById('barrascroll');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageyOffset / totalHeight) *100;
    progress.style.height = progressHeight + "%"; 
}

src="code.js"