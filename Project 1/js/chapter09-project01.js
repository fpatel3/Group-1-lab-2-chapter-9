
/* add code here  */


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

   
}



function empty()
{
  var x,y,z;
  x = document.getElementById("title").value; 

  y =  document.getElementById("description").value;
  z =  document.getElementById("year").value;
  if (x == "" || y == "" || z == "") 
   { 
       if(x == "")
       {
           console.log(x);
            alert("Enter a Valid title");
    //   submit.addEventListener(
    //       "click", function(event){
    //     event.preventDefault();
    //         });
            return false;
       }
       else if(y == "")
       {
        console.log(y);

      alert("Enter a Valid description");
    //   submit.addEventListener("click", function(event){
    //     event.preventDefault();
     // });
      return false;
       }
      else if(z == "")
      {
     alert("Enter a Valid year");
    //  submit.addEventListener("click", function(event){
    //     event.preventDefault();
    //   });
    return false;
      }
      
       
   }
   // code done by foram..
}




function removeClass(selector, myClass) {

    // get all elements that match our selector
    elements = document.querySelectorAll(selector);
  
    // remove class from all chosen elements
    for (var i=0; i<elements.length; i++) {
      elements[i].classList.remove(myClass);
    }
  }
  
  // usage examples:
  removeClass('.class-selector', 'example-class');
  removeClass('#id-selector', 'example-class');
  // end of #4
  // code done by sharmin

   

