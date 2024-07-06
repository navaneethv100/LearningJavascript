const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColour = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomColour());

let intervalId

const changeBodyColour = () => {
    document.body.style.backgroundColor = randomColour()
}

const startChangingColour = () =>{
    if(!intervalId){
        intervalId = setInterval(changeBodyColour, 1000) 
    }
}
const stopChangingColour = () => {
    clearInterval(intervalId)
    intervalId = null

}

start.addEventListener('click',()=>{
    startChangingColour()
})
stop.addEventListener('click', ()=>{
    stopChangingColour()
})

