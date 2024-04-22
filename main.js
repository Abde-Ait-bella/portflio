var button = document.getElementById("btn")
var simpleBar = new SimpleBar(document.getElementById('page'));
simpleBar.getScrollElement().addEventListener('scroll', function(){
    if (this.scrollTop > 300 ){
        button.style.display = 'block';
    } else{
        button.style.display = 'none';
    }
});
/*

button.addEventListener("click", function(){
    window.scrollTo({top:0})
})*/
