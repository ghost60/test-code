//手写事件委托
function delegate(parent, eventType, selector, fn) {
  parent.addEventListener(eventType, function(e) {
    if (e.target.matches(selector)) {
      fn.call(e.target, e);
    }
  });
}