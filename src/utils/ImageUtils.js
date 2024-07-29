export const openImage = (event) => {
    window.open(event.target.dataset.image)
}
export const openModal = ({event, setImage, setID, setApiName}) => {
    if(setImage) setImage(event.target.src)
    if(setID) setID(event.target.id)
    if(setApiName) setApiName(event.target.dataset.api)
}
export const removeModal = ({setImage, setID, setApiName}) => {
    if(setImage)setImage(null)
    if(setID)setID(null)
    if(setApiName)setApiName(null)
}