export const getText=(state)=>{
    return state.text
}
export const getFilter=(state)=>{
    return state.filter
}

export const getVisibleTodos = (state) => {
    const {filter,todos:{data}}=state;
    switch (filter) {
      case "all":
        return data;
      case "completed":
        return data.filter((t) => t.completed);
      case "active":
        return data.filter((t) => !t.completed);
      default:
        return new Error("unknow filter" + filter);
    }
  };