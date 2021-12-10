export function createProductElements(data, productSection){

    const imageURL = '../public/products/'+data.imageURL;

    //all the node elements needed to create the product element
    const product = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const inforDiv = document.createElement('div');
    const treatmentPara = document.createElement('p');
    const productPara = document.createElement('p');
    const pricePara = document.createElement('p');

    ///text nondes
    const treatmentText = document.createTextNode(data.treatmentName)
    const productText = document.createTextNode(data.productName)
    const priceText = document.createTextNode('From R'+data.price)

    //adding classes to nodes
    product.classList.add('product')
    imageContainer.classList.add('image-area')
    inforDiv.classList.add('infor')
    treatmentPara.classList.add('treatment-name')
    productPara.classList.add('product-name')
    pricePara.classList.add('price')

    image.setAttribute('src',imageURL)


    //adding the text nodes to each p tag
    treatmentPara.appendChild(treatmentText)
    productPara.appendChild(productText)
    pricePara.appendChild(priceText)

    //adding all children to remaining elements
    inforDiv.appendChild(treatmentPara)
    inforDiv.appendChild(productPara)
    inforDiv.appendChild(pricePara)
    imageContainer.appendChild(image)

    product.appendChild(imageContainer)
    product.appendChild(inforDiv)


    //job done
    productSection.appendChild(product)
}
