//js9↓
function pullDown() {
const pullDownButton = document.getElementById("lists")
pullDownButton.addEventListener('mouseover', function() {
    console.log("乗る青")
})

document.getElementById("lists")
pullDownButton.addEventListener('mouseout', function() {
    console.log("外れる赤")
})


document.getElementById("lists")
pullDownButton.addEventListener('click', function() {
console.log("クリック緑")  
})

//わかんないから質問した↑　できたーーーーーー(^○^)
//JS10↓

document.getElementById("lists")
pullDownButton.addEventListener('mouseover',function(){
pullDownButton.setAttribute("style","background-color:blue;")
})

document.getElementById("lists")
pullDownButton.addEventListener('mouseout',function(){
pullDownButton.removeAttribute("style","background-color:red;")
})

document.getElementById("lists")
pullDownButton.addEventListener('click',function(){
pullDownButton.setAttribute("style","background-color:green;")
})

//js11↓
const pullDownParents = document.getElementById("pull-down")
pullDownButton.addEventListener('click', function(){
    if(pullDownParents.getAttribute("style")=="display:block;"){
pullDownParents.removeAttribute("style", "display:block;")
console.log("非表示")
    }else{
    pullDownParents.setAttribute("style", "display:block;")
    console.log("表示")
}
    })
//js12↓
//innerHTML

const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentlist = document.getElementById("current-list")
pullDownChild.forEach(function(list){
    list.addEventListener('click', function() {
        const value = list.innerHTML
        currentlist.innerHTML = value
        console.log(value)
    })
})
}
window.addEventListener('load',pullDown)