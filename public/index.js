let text = document.getElementById("affirm");
setInterval(function(){
        text.classList.add("hide");
        setTimeout(async function(){
            let affirm = await axios["get"]("/getAffirmation").then(res=> res.data);
            text.innerText = affirm;
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            let color = `rgb(${r}, ${g}, ${b})`
            document.querySelector("body").style.backgroundColor = color;
            text.classList.remove("hide");
        },1500);
    }, 10000);