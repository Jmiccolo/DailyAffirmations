let text = document.getElementById("affirm");
setInterval(function(){
        text.classList.add("hide");
        setTimeout(async function(){
            let affirm = await axios["get"]("/getAffirmation").then(res=> res.data);
            text.innerText = affirm;
            let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            document.querySelector("body").style.backgroundColor = color;
            text.classList.remove("hide");
        },1500);
    }, 10000);