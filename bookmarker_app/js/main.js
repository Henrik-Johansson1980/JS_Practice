//Event listener for form Submit
document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  //Get values from form
  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;
  if(!validate(siteName,siteURL)){
    return false;
  }
  //Bookmark
  var bookmark = {
    name : siteName,
    url : siteURL
  };

  //Save bookmark to Local storage
  //Check if bookmarks is null
  if(localStorage.getItem('bookmarks')===null){
    var bookmarks = [];
    //Push bookmark to array
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  else {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Push new bookmark to array
    bookmarks.push(bookmark);
    //Set it to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  //Prevent form from submitting
  //e.preventDefault();

  siteName.value = "";
  siteURL.value = "";
  //Get bookmsarks again.
  getBookmarks();
}

function getBookmarks(){
  //Get bookmarks from localStorage
  console.log(url);
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //Get div wher we'll display the bookmarks.
  var bookmarkResults = document.getElementById('bookmarkResults');
  //Create output.
  bookmarkResults.innerHTML="";
  //Loop through the items in the bookmarks array.
  for(var i = 0 ; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    //Append each bookmark to output
    bookmarkResults.innerHTML += '<div class="card bg-light m-1">' +
    '<div class="card-body">'+
    '<h4 class="card-title">'+name+'</h4>' +
    ' <a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> ' +
    ' <a onclick="deleteBookmark(\''+url+'\');" class="btn btn-danger" href="#">Delete</a> ' +
    '</div>' +
    '</div>';
  }
}

function deleteBookmark(url){
  //Fetch bookmarks , loop through them and delete
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for (var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      bookmarks.splice(i,1);
    }
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  //Get bookmsarks again.
  getBookmarks();
}

function validate(siteName,siteURL){
  if (!siteName || !siteURL){
    alert('Please fill in the form');
    return false;
  }
  var pattern = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(pattern);
  if(!siteURL.match(regex)){
    alert('Please enter a valid URL');
    return false;
  }
  return true;
}
