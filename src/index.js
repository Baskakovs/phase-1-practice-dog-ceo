console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const list = document.querySelector('#dog-breeds')

fetch(imgUrl)
.then((response)=>response.json())
.then((object)=>displayImage(object))
.catch(()=> console.log('error loading the images'))

fetch(breedUrl)
.then((response)=> response.json())
.then((object)=>breed(object))
.catch(()=> console.log('error loading the breeds'))

function breed(o){
    Object.keys(o['message']).forEach(function(type){
        let listItem = document.createElement('li')
        listItem.setAttribute('style', 'display: block')
        listItem.addEventListener("click", function(){
            listItem.setAttribute('style', 'color: red')
        })
        listItem.innerText = type
        list.append(listItem)
    })
}

function displayImage(object){
    object.message.forEach(function (image){
        const imageHolder = document.createElement('img')
        imageHolder.setAttribute('src',`${image}`)
        document.getElementById("images").appendChild(imageHolder)
 
    })
}
let array =[]
const select = document.getElementById('dog-breed').addEventListener('change', function (e){
   
    toArray()
    filtering(e.target.value)
})

function filtering(firstLetter){
    for (let i = 0; i < array.length - 1; i++){
            let st = array[i] + ''
            if(st[0]==firstLetter){
                list.childNodes[i].style = 'display: block'
            }else if(st[0]!=firstLetter){
                list.childNodes[i].style = 'display: none'
            }
    }
}


function toArray(){
    list.childNodes.forEach(function(e){
         array = [... array, e.innerText]
})}

