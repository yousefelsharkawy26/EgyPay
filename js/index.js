let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

    var counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
    counter++;
        if (counter > 4) {
        counter = 1;
        }
    }, 5000);
function scrollFunction1() {
    let e = document.getElementById("Team");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}

var count = 0;
function DarkLightMode(){
    let x = document.getElementById("circuilmode");
    var light = "circuilLight";
    var container = document.getElementsByClassName("container1");
    var paragraph = document.getElementsByClassName("p1");

    if(count % 2 == 0)
    {    
        count++;    
        x.classList.add(light);
        document.getElementById("body").classList.add("newBody");
        
        for(var i = 0; i < container.length ; i++) {
            container[i].style.background = '#333';
        }
        for(var i = 0; i < paragraph.length ; i++)
            paragraph[i].style.color = '#fff';
    }
    else
    {
        count++;
        x.classList.remove(light);
        document.getElementById("body").classList.remove("newBody");
        for(var i = 0; i < container.length; i++) {
            container[i].style.background = '#fff';
        }
        for(var i = 0; i < paragraph.length ; i++)
            paragraph[i].style.color = '#444';

    }
}


function searchEngine() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var elements = document.querySelectorAll('p','h1','h2','h3','h4','h5','h6')

    var Result = document.getElementById("searchResult");
    Result.innerHTML = '';

    elements.forEach(function(element){
        var txt = element.textContent.toLowerCase();
        if (txt.includes(input)) {
            var result = document.createElement('p')
            result.textContent = element.textContent;
            Result.appendChild(result);
        }
    });
}