//手写观察者模式
class Subject {
  constructor(){
    this.observers = [];
  }
  add(observer){
    this.observers.push(observer)
  }
  notify(){
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

class Observer {
  update(){
    console.log('update')
  }
}

let subject = new Subject();
let observer = new Observer();
subject.add(observer);
subject.notify(); // update

//手写发布订阅模式
class EventEmitter {
  constructor(){
    this.events = {};
  }
  on(event, callback){
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback)
  }
  emit(event, ...args){
    this.events[event].forEach(fn => {
      fn.apply(this, args)
    })
  }
  off(event, callback){
    this.events[event] = this.events[event].filter(fn => fn !== callback)
  }
  once(event, callback){
    let fn = (...args) => {
      callback.apply(this, args);
      this.off(event, fn)
    }
    this.on(event, fn)
  }
}

let event = new EventEmitter();
event.on('click', function(){
  console.log('click')
})
event.emit('click') // click
