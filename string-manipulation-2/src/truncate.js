/* exported truncate */
function truncate(length, string) {
  var letters = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      letters += string[i];
    }
  }
  return letters + '...';
}

// want to return a string so assign an empty string to a variable.
// for loop
// if (i < length) , because you want you stop stop at -1 of the index which is less than length.
// letters += string[i] adds and assigns- it is the same as letteres = letters + string[i];
// return letters + '...' because the instructions say to append '...';
