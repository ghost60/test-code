// 手写promise
// 1. promise是一个类，类中有一个构造函数，构造函数中有一个executor函数，executor函数中有两个参数，resolve和reject
// 2. promise有三种状态：pending、fulfilled、rejected
// 3. promise有一个then方法，then方法中有两个参数，onFulfilled和onRejected
// 4. promise有一个catch方法，catch方法中有一个参数，onRejected
// 5. promise有一个finally方法，finally方法中有一个参数，onFinally
// 6. promise有一个all方法，all方法中有一个参数，promises
// 7. promise有一个race方法，race方法中有一个参数，promises
// 8. promise有一个resolve方法，resolve方法中有一个参数，value
// 9. promise有一个reject方法，reject方法中有一个参数，reason
// 10. promise有一个allSettled方法，allSettled方法中有一个参数，promises
// 11. promise有一个any方法，any方法中有一个参数，promises
// 12. promise有一个try方法，try方法中有一个参数，fn

class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
  catch(onRejected) {
    return this.then(null, onRejected)
}