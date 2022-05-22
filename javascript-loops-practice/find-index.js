/* exported findIndex */

// goal: to find the index of the array. the return value should be the index if it is in the array. If it is not inside the array, then return -1
// create a for looop in order to go through each value of the array
//     for (var i = 0; i < array.length < i++)
// after the loop, what parameters can we set to allow the computer to decided whether to push value[i] or not?
//     if (array[i] === value)
// if (array[i] === value) then return the index; return i
// otherwise, return -1 if the if statement is not met.

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}
