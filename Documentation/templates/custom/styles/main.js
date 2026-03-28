function filterAffix() {
  var input = document.getElementById('affix-filter');
  if (!input) return;
  var filter = input.value.toUpperCase();
  var items = document.querySelectorAll('#affix ul li');
  
  for (var i = 0; i < items.length; i++) {
    var a = items[i].querySelector('a');
    if (a) {
      var txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}
