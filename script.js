console.log("script running...")
document.querySelector('.cross').style.display = "none";
document.querySelector('.menubar').addEventListener("click", ()=>{
    document.querySelector('.navbar').classList.toggle('hidemenu');
    if(document.querySelector('.navbar').classList.contains('hidemenu')){
        document.querySelector('.menu').style.display = "inline";
        document.querySelector('.cross').style.display = "none";
    }
    else{
        document.querySelector('.menu').style.display = "none";
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline";
        }, 300);
    }
})
