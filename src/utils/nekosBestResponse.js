export default function nekosBestResponse(res){
    const image = res.results[0].url;
    const author = res.results[0].artist_name !== null ? res.results[0].artist_name : "Nome indisponível";
    const social = res.results[0].artist_href !== null ? res.results[0].artist_href : "#";
    return {image, author, social}
}