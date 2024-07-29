const handleRemoveFavorite = (list,setList,updateForce,setCount) => {
    const api = list.map(item => item.api)
    const id = list.map(item => item.id)
    api.forEach((element, index) => {
        const local = JSON.parse(localStorage.getItem(element))
        const favorite = local.filter(item => item.id != id[index])
        localStorage.setItem(element, JSON.stringify(favorite))
    })
    updateForce(prev => prev + 1);
    setCount(0)
    setList([])
}
export default handleRemoveFavorite