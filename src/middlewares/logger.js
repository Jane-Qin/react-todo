const logger=({getState,dispatch})=>next=>action=>{
    console.group(action.type);
    console.log("dispatching:",action);
    const result=next(action); //通过next函数将action传递给下一个中间件，返回处理后的结果
    console.log('next state:',getState()); //获取到新的state
    console.groupEnd();
    return result;
}
export default logger;