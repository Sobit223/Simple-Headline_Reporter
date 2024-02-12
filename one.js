
//Simple fetching the Top 20 headlines of the country
const button = document.querySelector('.button')
const input = document.querySelector('.input')
const response = document.querySelector('.response')

button.addEventListener('click', function(event){
    
    response.innerHTML=''
    api_Handler(input.value)
    input.value = ''
})


//It Handles The API Call
function api_Handler(value){
    const api = '478dc59614464865965ad7eaf3120166'
    fetch(`https://newsapi.org/v2/top-headlines?country=${value}&apiKey=${api}`).
    then((res)=> res.json()).
    then((res)=> {
        const x = res.articles
        for(let i in x){
            let news = x[i]
            author = news.author
            title = news.title
            desciption = news.description
            const data = create_new_Child(author,title,desciption)
            response.appendChild(data);
        }

    }).
    catch((err)=>{
        console.log(err);
        error_Handling()
    })
}


function create_new_Child(author,heading,desciption){
    const newelem = document.createElement('div');
    if(author==null){
        author='Author Name not Available'
    }
    if(heading==null){
        heading= 'Heading Not Avialable'

    }
    if(desciption==null){
        desciption= 'Content Not Available'
    }

    newelem.innerHTML+= `<h2 class='author'>${author}</h2>`
    newelem.innerHTML+= `<h3 class='heading'>${heading}</h3>`
    newelem.innerHTML+=`<p><b class='descitption'>${desciption}</b></p>`
    newelem.className='appended_Childs'
    return newelem
}


function error_Handling(){
    response.innerHTML = '<h2>Sorry The Content is Not Available Right Now </h2>'
}
