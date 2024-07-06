const xhr = new XMLHttpRequest()

const requestURL = "https://api.github.com/users/navaneethv100"

const image = document.querySelector('img')
const myName = document.querySelector('h1')
const bio = document.querySelector('.title')

xhr.open('GET',requestURL)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        image.innerHTML = `<img src="${data.avatar_url}" alt="Navaneeth" style="width:100%">`
        myName.innerHTML = `${data.name}`
        bio.innerHTML = `${data.bio}`
    }
}
// console.log(xhr.readyState);
xhr.send()