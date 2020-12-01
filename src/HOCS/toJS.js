//在高阶组件中，完成immutable对象到不同js对象的转换
import React from "react";
import { Iterable } from "immutable";
//高阶组件，接收一个react组件为参数，返回新的react组件的函数
//WrappedComponent react组件作为参数
export const toJS = WrappedComponent  => wrappedComponentProps=> {
  //WrappedComponent的属性
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (curProps, wrappedComponentProp) => {
      curProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE];
      return curProps;
    },
    {}
  );
  return <WrappedComponent {...propsJS}/>
};
