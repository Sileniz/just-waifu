export const RetrieveFavorites = (setGallery) => {
    const keys = Object.keys(localStorage)
    let arr = []
    for (let i = 0; i < keys.length; i++) {
        const data = JSON.parse(localStorage.getItem(keys[i]))
        arr = arr.concat(data)
    }
    setGallery(arr.filter(item => item.image))
}