import { createProductElements } from "../utilties.js"


const submitBtn = document.querySelector('#submit-btn')
const openFormBtn = document.querySelector('#openForm')
const closeBtn = document.querySelector('.close')
const form = document.querySelector('.form-container')


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
})
closeBtn.addEventListener('click',()=>{
    // e.preventDefault()
    document.body.style.height='fit-content'
    document.body.style.overflowY='visible'
    form.style.display='none'
})
openFormBtn.addEventListener('click',()=>{
    // e.preventDefault()
    document.body.style.height='100vh'
    document.body.style.overflowY='hidden'
    form.style.display='flex'
})






const productSection = document.querySelector('#product-section')
// const productSection = document.querySelector('#product-section')

const mobileNavContainer = document.querySelector('#mobile-nav')
const mobileNav = document.querySelector('#mobile-nav>nav')
const burgerMenu = document.querySelector('#burger-menu')
const closeMenuBtn = document.querySelector('#close-btn')



closeMenuBtn.addEventListener('click',(e)=>{
    mobileNav.style.marginLeft='-100%'
    setTimeout(()=>{
        // mobileNav.style.marginLeft='0'
        mobileNavContainer.style.display='none'
        document.body.style.height='auto'
        document.body.style.overflow='visible'  
    },210)

})
burgerMenu.addEventListener('click',(e)=>{
    // alert('hhhe')
    document.body.style.height='100vh'
    document.body.style.overflow='hidden'
    mobileNavContainer.style.display='block'
    setTimeout(()=>{
        mobileNav.style.marginLeft='0'
    },50)
})





fetch('../productData.json')
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
        const name = 'periodDelay'
        if(name in data){
            data[name].forEach(treatment=>{
                createProductElements(treatment,productSection)
            })
        }
    })
    .catch(error => console.log(error))

