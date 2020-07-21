let
  call_seq_current = 0,
  calls = new Map(),
  call_listeners = new Map(),
  id_key = Symbol("id");

module.exports = {
  call,
  call_listen,
  is_call
}

function call_seq_next() {
  return ++call_seq_current;
}

function is_call(fn) {
  return fn[id_key];
}

function call() {
  const id = call_seq_next();
  const fn = function() {
    const listener = call_listeners.get(id);
    if (listener) {
      const res = listener.apply(null, arguments);
      return res;
    }
  };
  fn[id_key] = id;
  calls.set(id, fn);
  return fn;
}

function call_listen(fn, listener) {
  const id = fn[id_key];

  if (call_listeners.has(id)) {
    throw new Error("Supported just one listener for call");
  }
  call_listeners.set(id, listener);

  return () => {
    call_listeners.delete(id);
  }
}
