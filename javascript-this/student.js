/* exported student */
var student = {
  firstName: 'sharon',
  lastName: 'tieu',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};

// getFull name: function () {
// var fullName = this.firstName + ' ' + this.lastName;
// return fullName;
// }

// getIntroduction: function () {
// var introduction = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
// return introduction;
// }
