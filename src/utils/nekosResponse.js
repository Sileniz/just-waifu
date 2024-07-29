export default function nekosResponse(res){
    const index = Math.floor(Math.random() * res.items.length)
    const image = res.items[index].image_url;
    const author = res.items[index].artist != null ? res.items[index].artist : "Nome indisponível";
    return { image, author}
}