function showPage(id) {
    const element = document.getElementById(id);
    if(id == 'log')
    {   
        element.classList.add("LogPage02");
        document.getElementById("reg").classList.remove("LogPage02");
    }
    else{
        element.classList.add("LogPage02");
        document.getElementById("log").classList.remove("LogPage02");
    }
}