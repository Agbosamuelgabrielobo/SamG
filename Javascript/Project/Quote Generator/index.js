const btn= document.getElementById("btn")
const content= document.getElementById("content")
const author= document.getElementById("author")
function quote() {
    axios("https://api.quotable.io/random",)
    .then(response=>{console.log(response)})
    .catch(error=>{console.log(error)}) 
}
  
