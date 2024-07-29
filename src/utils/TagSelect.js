export default function TagSelect({event,setWaifuPICS,setNekosAPI,setNekosBEST}){
    const name = event.target.name
    if(name === "Nekos.BEST"){
        setNekosBEST(prev => !prev)
    }if(name === "NekosAPI"){
        setNekosAPI(prev => !prev)
    }if(name === "Waifu.pics"){
        setWaifuPICS(prev => !prev)
    }   
}