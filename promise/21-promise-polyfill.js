// 21. Promise Polyfill Implementation

// Basic Promise polyfill (simplified for educational purposes)
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn(value));
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(x);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected ? onRejected(this.reason) : this.reason;
            reject(x);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else {
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const x = onFulfilled ? onFulfilled(value) : value;
              resolve(x);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const x = onRejected ? onRejected(reason) : reason;
              reject(x);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Usage example
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('Polyfilled!'), 100);
});
p.then(console.log).catch(console.error);

/*
Summary:
- This is a basic polyfill showing Promise internals: state management, callbacks, and chaining.
- Real polyfills (e.g., es6-promise) are more complex with thenable assimilation.
*/
