//use JS to change the styles of each of the elements in your list
document.getElementById("one").style.color = "blue";
document.getElementById("two").style.color = "pink";
document.getElementById("three").style.font = "bold 20px arial";

//Change the class name of your second item in your list using child - in js
document.getElementById("secondList").childNodes[1].className="ahahah";

//Change the text value of your last item in your list using sibling - in js
document.getElementById("last").nextElementSibling.textContent="Final";