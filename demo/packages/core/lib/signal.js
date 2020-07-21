let
  signal_seq_current = 0,
  signals = new Map(),
  signal_listeners = new Map(),
  signal_tuples = new Map(),
  id_key = Symbol("id");

export {
  signal,
  signal_listen,
  is_signal
}

function is_signal(fn) {
  return fn[id_key];
}

function signal_seq_next() {
  return ++signal_seq_current;
}

function signal() {
  const id = signal_seq_next();
  signal_tuples.set(id, Array.prototype.slice.call(arguments));

  const fn = function() {
    let tuple = Array.prototype.slice.call(arguments);
    let prev = signal_tuples.get(id);
    if (tuple.length === prev.length) {
      let len = tuple.length;
      let changed = 0;
      while(len--) {
        if (!Object.is(prev[len], tuple[len])) {
          changed = 1;
          break;
        }
      }
      if (!changed) return;
    }

    signal_tuples.set(id, tuple);
    const listeners = signal_listeners.get(id);
    if (listeners) {
      for (const fn of listeners.slice()) fn.apply(null, tuple);
    }
  };
  fn[id_key] = id;
  signals.set(id, fn);
  return fn;
}

function signal_listen(fn, listener) {
  const id = fn[id_key];

  let listeners = signal_listeners.get(id);
  if (!listeners) {
    signal_listeners.set(id, (listeners = []));
  }
  listeners.push(listener);
  listener.apply(null, signal_tuples.get(id));

  return () => {
    // TODO: unlink
  }
}
