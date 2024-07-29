export default function checkStatus(res){
    return res.ok ? res.json() : "Ocorreu um ao erro ao se comunicar com a API"
}