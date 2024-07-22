import { DependencyList, EffectCallback, useEffect } from "react";

export const useMount = (fn: EffectCallback, dep: DependencyList = []) => {
  useEffect(() => {
    fn();
  }, dep);
};
