
/* add code here  */


function setBackground(e) {
    if (e.type == "focus") { e.target.classlist.add("highlightable")
    }
    else if (e.type == "blur") {
        e.target.style.classlist.remove("highlightable")//done by vaidehi refrences lab 's note
    }

    window.addEventListener("load", function () {
        var cssSelector = "input[type=text],select[name=subject],select[name=genre]";
        var fields = document.querySelectorAll(cssSelector);
        for (i = 0; i < fields.length; i++) {
            fields[i].addEventListener("focus", setBackground);
            fields[i].addEventListener("blur", setBackground);
        }   //code done by vaidehi
    });

   