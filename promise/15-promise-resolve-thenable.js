// 15. Promise.resolve() with Thenables

const thenable = {
  then(resolve, reject) {
    setTimeout(() => resolve('Thenable resolved!'), 200);
  }
};

Promise.resolve(thenable)
  .then((v) => console.log('Promise assimilated thenable:', v));
// Output: Promise assimilated thenable: Thenable resolved!

// Edge: If thenable throws, Promise rejects
const badThenable = {
  then() { throw new Error('Oops!'); }
};
Promise.resolve(badThenable)
  .catch((e) => console.log('Promise rejected bad thenable:', e.message));

/*
Summary:
- Promise.resolve() will "assimilate" any thenable (object with a then method).
*/
