async function getQuote() {
    try {
        const res= await axios.get("https://api.quotable.io/random")
        const data= res.data
        document.getElementById("content").innerHTML= data.content
        document.getElementById("author").innerHTML= data.author
    } catch (error) {
        document.getElementById("err").innerHTML= error
    }
}