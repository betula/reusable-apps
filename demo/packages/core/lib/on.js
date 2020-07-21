const { is_call, call_listen } = require('./call');
const { is_signal, signal_listen } = require('./signal');

module.exports = {
  on
};

function on(target, listener) {
  if (is_call(target)) {
    return call_listen(target, listener)
  }
  if (is_signal(target)) {
    return signal_listen(target, listener);
  }
}
