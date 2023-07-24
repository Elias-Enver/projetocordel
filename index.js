const inputsearch=document.querySelector('#search')
const navmenu=document.querySelector("[data-type='nav-menu']")

const details = Array.from(navmenu.querySelectorAll('details'))
const lis =Array.from(navmenu.querySelectorAll('details li'))
const lisToggle=Array.from(navmenu.querySelectorAll('li.toggle'))


//pegaando o valor digitado
inputsearch.addEventListener('input',function(){
    const str = this.value

    // if para pegar se o input tiver um caracter fazer filtro , se tiver vazio mostrar tudo 
    if(str){
        filterdata(str)
    }else{
        showallitems()
    }
})

function showallitems(){
    lis.forEach(li=>li.classList.remove('hide'))
    details.forEach(detail => detail.removeAttribute('open'))
}

function filterdata(str){
    showallitems()
    lisToggle.forEach(liToggle=>{
        const details = liToggle.querySelector('details')
        if(!details) return

        const summary =details.querySelector('summary')
       

        if(summary && summary.textContent.toLocaleLowerCase().includes(str.toLocaleLowerCase())){
           return details.setAttribute('open',"")
        }

        const lis = details.querySelectorAll('li')

        let found = false

        // poderia fazer um array from, porem daria problema de perfomance pois essa função irá ser executada todas vez que for clicado um caracter no input
        

        for (let i = 0 ;i < lis.length;i++){
            let li =lis[i]
            if(li.textContent.toLocaleLowerCase().includes(str.toLocaleLowerCase())){
                found=true
                li.classList.remove('hide')
            }else{
                li.classList.add('hide')
            }
        }

        if (found){
            details.setAttribute('open',"")
        }else{
            details.removeAttribute('open',"")

        }



    })

}