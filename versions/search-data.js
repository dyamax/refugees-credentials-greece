const autocomleteList=["apple","ananas","banana","orange","pineapple"];
const searchInput=document.getElementById('searchInput');

searchInput.addEventListener('input', function(){
    const inputValue=this.value.toLowercase();
    const autocomleteResults=document.getElementById('autocomleteResults');
    autocomleteResults.innerHTML=''
    autocomleteList.forEach(item => {
        if(item.toLowerCase().startsWith(input-Value)){
            const suggestion=document.createElement('div');
            suggestion.addEventListener('click', function(){
                searchInput.value=item;
                autocomleteResults.innerHTML=''
            })
            autocomleteResults.appendChild(suggestion);
        }
    });
});