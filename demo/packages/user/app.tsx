import { FunctionalComponent, useEffect } from "react";
import { signal, call, on } from "core";

export const currentUserSignal = signal();
export const loginCall = call();

export const App: FunctionalComponent = () => {
  useEffect(() => on(loginCall, () => {
      currentUserSignal("John Doe");
  }), [])
  return null;
}
