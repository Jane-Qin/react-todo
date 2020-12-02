import { createSelector } from "reselect";
/**redux的state任意改变都会导致所有select的重复计算，通过reselect可以避免这个改变
 * （只要这个select用到的state没有发生改变，这个select就不会重新计算）**/

//将state对象进行了immutable化，就不能通过原有的js访问对象的方式来使用state
export const getText = (state) => {
  return state.get("text");  //这个selector获取状态直接返回，没有计算，不需要使用createSelector
};
export const getFilter = (state) => {
  return state.get("filter"); //这个selector获取状态直接返回，没有计算，不需要使用createSelector
};
const getTodos=state=>state.getIn(["todos","data"]);
export const getVisibleTodos = createSelector([       //createSelector([selector函数数组],(selector数组返回值)=>{进行计算})
  getFilter,getTodos
], (filter,data) => {      //只有当state的filter,todos.data的有变化时，才会进行下面的计算
  console.log("getVisibleTodos");   
  switch (filter) {
    case "all":
      return data;
    case "completed":
      return data.filter((t) => t.get("completed"));
    case "active":
      return data.filter((t) => !t.get("completed"));
    default:
      return new Error("unknow filter" + filter);
  }
});

//将state对象进行了immutable化，就不能通过原有的js访问对象的方式来使用state


// export const getVisibleTodos = (state) => {
//   //const {filter,todos:{data}}=state;
//   const data = state.getIn(["todos", "data"]); //逐层遍历取值
//   const filter = state.get("filter");
//   console.log("getVisibleTodos");
//   switch (filter) {
//     case "all":
//       return data;
//     case "completed":
//       return data.filter((t) => t.get("completed"));
//     case "active":
//       return data.filter((t) => !t.get("completed"));
//     default:
//       return new Error("unknow filter" + filter);
//   }
// };


// export const getText=(state)=>{
//     return state.text
// }
// export const getFilter=(state)=>{
//     return state.filter
// }
// export const getVisibleTodos = (state) => {
//     const {filter,todos:{data}}=state;
//     switch (filter) {
//       case "all":
//         return data;
//       case "completed":
//         return data.filter((t) => t.completed);
//       case "active":
//         return data.filter((t) => !t.completed);
//       default:
//         return new Error("unknow filter" + filter);
//     }
//   }; 