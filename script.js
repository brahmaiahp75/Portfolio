
function opentab(tabname) {
    var tl = document.getElementsByClassName("links");
    var tc = document.getElementsByClassName("tab-content");
   
    for (link of tl) {
       link.classList.remove("active");
    }
   
    for (tab of tc) {
       tab.classList.remove("active-tab");
    }
   
    event.currentTarget.classList.add("active");

    document.getElementById(tabname).classList.add("active-tab");
   }