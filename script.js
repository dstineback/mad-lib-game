function lib() {
  var story = document.getElementById('story');
  var name = document.getElementById('name').value;
  var adjetive = document.getElementById('adjetive').value;
  var noun = document.getElementById('noun').value;
  story.innerHTML = name + ' ' + noun + ' ' + adjetive + ' ' + 'love dogs!';
}

var button = document.getElementById('button');
button.addEventlistner('click', lib);
