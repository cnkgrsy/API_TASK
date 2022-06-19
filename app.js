let searchInput = location.search.split('=').pop();
const accessKey = "-d6MoxD-1c-aVMlIEG9Qi6QMxl5BK-OO3JiRhgKFJ-Q"
const secretKey = "mu_sWORdXBZAkeIOZECNPmKsrQ1HLXyM0TpOYdBdUCU"

const randomPhoto =`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`
const searchPhoto =`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchInput}&per_page=50`

const gallery =document.querySelector('.gallery')
let allImages;

const getImages = () =>{
    fetch(randomPhoto)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    })
}

let searchImages = () =>{
    fetch(searchPhoto)
    .then(res => res.json())
    .then(data => {
        allImages = data.results;
        makeImages(allImages);
    })
}

const makeImages = (data)=>{
    for(let i=0;i<data.length; i++){
        
        // console.log(data[i].urls.regular);

        let img = document.createElement('img')
        img.src = data[i].urls.regular
        img.className = "gallery-img";
        img.id = `gallery-img_ID_${i}`
        gallery.appendChild(img)

        
    }
}


if(searchInput === ""){
    getImages();
}else{
    searchImages();
}



//* tiklama resim secme bolumu *//
setTimeout(()=>{
const images = document.getElementsByClassName('gallery-img');

const clickAddButton = document.getElementById("AddButton")

clickAddButton.addEventListener('click',()=>{
    
    console.log(selectArr)
    let slick = document.createElement('script')
    slick.setAttribute('src','slick.js')
    document.body.appendChild(slick)
    for(let eachImg of selectArr){
        
        let imageInGalleryId = document.getElementById(eachImg.id)
        
        let newList = document.createElement('li')
        newList.setAttribute('class','list-image')
        slideGallery = document.querySelector('.slider')

        let galleryImage = document.createElement('img')
        galleryImage.setAttribute("class","image")
        galleryImage.setAttribute('src',imageInGalleryId.src);
        slideGallery = document.querySelector('.slider')
 
        // console.log(slideGallery)
        let whatt = slideGallery.insertBefore(newList,document.querySelector('.slick-list'))
        whatt.appendChild(galleryImage)
        console.log(whatt)
        
        
    }
    setTimeout(()=>{
        const arrowText = document.getElementsByClassName("slick-arrow")
        arrowText.item(0).innerHTML = "<"
        arrowText.item(1).innerHTML = ">"
    
    
        var dotNums = document.querySelectorAll(".slick-dots button");
    
        function removeText(item) {
          item.innerHTML = ""; // or put the text you need inside quotes
        }
      
        dotNums.forEach(removeText);
    
    },100)

})

// console.log(images.length)


const selectArr = []

for(let i=0; i<images.length; i++){
    
    images[i].addEventListener('click', ()=>{

        let toShow= images[i].id;
        let newObject = {id:toShow}
        // console.log(newObject)
        if(selectArr.some(arr => arr.id ===toShow)){
            console.log('includes')
            let index = selectArr.findIndex(object=>{
                return object.id === toShow
            })
            selectArr.splice(index,1)
            document.getElementById(`${toShow}`).style.borderStyle = "none";
            document.getElementById(`${toShow}`).style.borderColor = "none";    
            
                if(selectArr.length>0){
                    document.querySelector('.AddButton').style.visibility = 'visible'
                }else{
                    document.querySelector('.AddButton').style.visibility = 'hidden'
                }
        
            }else{


        console.log("not includes")
        selectArr.push({id:toShow})
        let border = document.getElementById(`${toShow}`)
        document.getElementById(`${toShow}`).style.borderStyle = "solid";
        document.getElementById(`${toShow}`).style.borderColor = "rgba(96, 224, 27, 0.869)";
        document.querySelector('.AddButton').style.visibility = 'visible'
       
        
        }

        
        
    })
    
}
 
},'1000')



// if(selectArr.length!== 0){
//     document.querySelector('AddButton').style.visibility = 'visible'
// }

