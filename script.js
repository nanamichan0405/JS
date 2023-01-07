//js9↓
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