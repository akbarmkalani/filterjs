let  _from = document.querySelectorAll(".fromimg")
let _backImg = document.querySelectorAll(".backimg")
let _liBox = document.querySelectorAll('.li-box>figure')
let liBox = document.querySelectorAll('.li-box')
//console.log(liBox);

for(let i = 0; i<_liBox.length ; i++){
    _liBox[i].addEventListener("mouseover", ()=> {
        _from[i].style.transform = "perspective(1000px) rotateY(180deg)"
        _backImg[i].style.transform = "perspective(1000px) rotateY(0deg)"
    })
    _liBox[i].addEventListener("mouseleave", ()=> {
       _from[i].style.transform = "perspective(1000px) rotateY(0deg)"
       _backImg[i].style.transform = "perspective(1000px) rotateY(-180deg)"

   })

 //  _liBox[i].getAttribute(data-car)
}
 
function para(self) {
    let txt = self.innerText 
    console.log(txt);


    for(let i = 0; i<liBox.length; i++){
        temp =   liBox[i].getAttribute('data-car')
       if(txt=='All'){
        liBox[i].style.display = 'flex'
       }else{
        if(txt == temp){
            liBox[i].style.display = 'flex'
          
           }else{
            liBox[i].style.display = 'none'
           }
       }

    }
    
   
}


