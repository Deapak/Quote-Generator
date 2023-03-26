const btnEl = document.getElementById('btn');
const apiURL =('http://api.quotable.io/random');
const authorEl = document.getElementById('author');
const quoteEl = document.getElementById('quote');

async function getQuote(){
    try {
        btnEl.innerText = "Loading..."
        btnEl.disabled = true;
        authorEl.innerText = "Updating Please wait";
        quoteEl.innerText = "Request in Process!!!"
       
       
        const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteauthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~" + quoteauthor;
    btnEl.disabled = false;
    btnEl.innerText = "Get a Quote";
        
    } catch (error) {
        quoteEl.innerText = "Opps!! Something went wrong!!";
        authorEl.innerText = "Please try again!!";
        
    }
    


    
}


btnEl.addEventListener('click',getQuote);



