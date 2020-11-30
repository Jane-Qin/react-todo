//将state对象进行了immutable化，就不能通过原有的js访问对象的方式来使用state
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

//将state对象进行了immutable化，就不能通过原有的js访问对象的方式来使用state
export const getText=(state)=>{
    return state.get("text");
}
export const getFilter=(state)=>{
    return state.get("filter");
}

export const getVisibleTodos = (state) => {
    //const {filter,todos:{data}}=state;
    const data=state.getIn(['todos','data']);  //逐层遍历取值
    const filter=state.get("filter");
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
  };