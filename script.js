/*========================================
                Slider
========================================*/
const title = document.querySelector('.title')
const titlesSliderArr = ['hey friends', 'about company', 'our features']//array titles of slider 
/**************Control Slider***************/
function controlSlider(){
  const btnsControl = document.querySelectorAll('.slider-container .btn-round')//buttons control of slider
  const slide = document.querySelectorAll('.slide')//slide
  //const slider_container = document.querySelector('.slider-container')//slider container 
   
   
  let indexSlide = 0 //counter of slider

  btnsControl.forEach(item=>{  
    item.addEventListener('click', event =>{
      let widthSlide = slide[indexSlide].offsetWidth;//get width of slide
      let position = window.getComputedStyle(slide[indexSlide]).left.slice(0,-2);//get position of slide
        
      if(item.classList.contains('next')){
        stepToLeft(position, widthSlide)//slide to left
      }
      if(item.classList.contains('prev')){
        stepToRight(position, widthSlide )//slide to right
      } 
    })
     
  })
  /*****Slide step to left*****/
  function stepToLeft(position, widthSlide ){ 
    if(indexSlide < slide.length-1){
      slide[indexSlide].style.left = Number.parseInt(position) - widthSlide + 'px'//scroll the slider to left 
      setTimeout(()=>{ 
        slide[indexSlide].style.display = 'none' //remove slide 
        slide[indexSlide+1].style.display = 'list-item'//show next slide
          
        setTimeout(()=>{
          slide[indexSlide+1].style.left = "0px"//scroll next slide to left 
        },300)   
      },300) 
    }
    if(indexSlide != slide.length-1){
      setTimeout(()=>{
          indexSlide++ //change counter
          title.innerHTML = titlesSliderArr[indexSlide]//change title'
          disabled()
      },700)      
    }
  }
  /*****Slide step to right*****/
  function stepToRight(position, widthSlide){
    if(indexSlide > 0){  
      slide[indexSlide].style.left = Number.parseInt(position) + widthSlide + 'px'//scroll the slider to right    
      setTimeout(()=>{  
          slide[indexSlide].style.display = 'none'//remove slide
          slide[indexSlide-1].style.display = 'list-item'//show next slide
          
          setTimeout(()=>{ 
            slide[indexSlide-1].style.left = "0" //scroll next slide to left  
          },300)
      },300)
    }
    if(indexSlide != 0){ 
      setTimeout(()=>{
          indexSlide--  //change counter   
          title.innerHTML = titlesSliderArr[indexSlide]//change title
          disabled()
      },700) 
    }
  }
  /*****disabled button*****/
  function disabled(){
    if(indexSlide === 0){
      btnsControl[0].setAttribute('disabled', 'disabled')//add attribute disabled
    }else{
      btnsControl[0].removeAttribute('disabled')//remove attribut disabled
    } 
    if(indexSlide === slide.length-1){
      btnsControl[1].setAttribute('disabled', 'disabled')//add attribute disabled
    }else{
      btnsControl[1].removeAttribute('disabled')//remove attribut disabled
    }
  }
}
controlSlider()