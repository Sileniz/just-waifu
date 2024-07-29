export const toggleMode = (setMode,mode,setList,setCount) => {
    setMode(prev => !prev)
    mode ? setList([]) : null
    setCount(0)
};