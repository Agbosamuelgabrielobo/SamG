const btn= document.getElementById("btn")
const content= document.getElementById("content")
const author= document.getElementById("author")
function quote() {
    axios.get("https://api.quotable.io/random",)
    .then(response=>{content.innerHTML= response.data.content;
    author.innerHTML= response.data.author})
    .catch(error=>{err.innerHTML=error})
}
  
                                                     