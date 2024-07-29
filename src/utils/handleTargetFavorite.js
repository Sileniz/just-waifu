export const handleTargetFavorite = (event,setCount,setList,list) => {
    const excludeFav = {};
    let arr = list
    excludeFav.image = event.target.src;
    excludeFav.api = event.target.dataset.api;
    excludeFav.id = event.target.id
        if(arr.some(item => item.image === excludeFav.image)){
            arr = arr.filter(item => item.image !== excludeFav.image)
            setCount(prev => prev - 1 )
        }else{
            setCount(prev => prev + 1)
            arr.push(excludeFav)
    }
    setList(arr)
}