// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { useState } from "react";

type VFn = () => void;

/**
 * Stateful state
 */
type State = boolean;

/**
 * Functions to update state
 */
type StateUpdater = { on: VFn; off: VFn; toggle: VFn };

/** Hooks for switchable `boolean` function
 * ```ts
 * const [state, { on, off, toggle }] = useBoolean()
 * on()
 * state // true
 * off()
 * state // false
 * toggle()
 * state // true
 * toggle()
 * state // false
 * ```
 */
const useBoolean = (
  /**
   * @defaultValue false
   */
  initialState: boolean | (() => boolean) = false,
): [State, StateUpdater] => {
  const [state, setState] = useState<boolean>(initialState);

  const on: VFn = () => setState(true);
  const off: VFn = () => setState(false);
  const toggle: VFn = () => setState((state) => !state);

  return [state, { on, off, toggle }];
};

export { useBoolean };
export type { State, StateUpdater };
