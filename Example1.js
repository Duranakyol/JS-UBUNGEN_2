var li = document.querySelectorAll("li:nth-child(odd)");
li.forEach(function(item) {
    item.style.backgroundColor = "red";
});

var li_2 = document.querySelectorAll("li");
for (i = 0; i < li_2.length; i++) {
    li_2[i].style.fontSize = "2.2em";
}