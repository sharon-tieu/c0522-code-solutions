function ExampleConstructor() {
}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor);

const actualConstructor = new ExampleConstructor();
console.log('value of new ExampleConstructor():', actualConstructor);
console.log('instanceof:', actualConstructor instanceof ExampleConstructor);
