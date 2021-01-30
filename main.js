/**
 * pagination
 */
// Add active class to the current button (highlight it)
/**
 * 
 */
window.addEventListener('load',()=>{
var header = document.getElementsByClassName("my-div");
for(var x = 0;x < header.length; x++){
  var btns = header[x].getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(event) {
    var current = this.parentNode.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
    //window.addEventListener('click')
  }
}
})
