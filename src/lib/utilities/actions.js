export const Toggle = (elemID, checkClass)=>{
    const element = document.getElementById(elemID)
    if(element.classList.contains(checkClass)){
        element.classList.remove(checkClass)
        return 
    }
    element.classList.add(checkClass)
    
}