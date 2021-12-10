const categoryHolder = document.querySelector('#category-holder')
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



fetch('./data.json')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((data,index) => createParagraph(data,index))
    })
    .catch(error=>console.log('Error :', error))

function createParagraph(data, index){
    const name = data.name
    const url = 'public/'+data.imageURL
    
    const category = document.createElement('div');
    const linkHolder = document.createElement('a');
    const categoryImg = document.createElement('img');
    const categoryPara = document.createElement('p');
    const textNode = document.createTextNode(name);

    category.classList.add('category')
    
    categoryImg.setAttribute('src',url)
    categoryImg.setAttribute('alt',name)
    linkHolder.setAttribute('href','treatment/'+data.linkTo)
    categoryPara.appendChild(textNode)

    category.appendChild(categoryImg)
    category.appendChild(categoryPara)
    
    
    if(index>7){
        category.classList.add('deactivated');
    }
    
    linkHolder.appendChild(category)
    categoryHolder.appendChild(linkHolder)
}