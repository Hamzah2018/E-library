
let day1 = document.getElementById('days');
let  hour1 = document.getElementById('hours');
let  mint1 = document.getElementById('minutes');
let imgSport =document.getElementById('sport-bag');
 let second1 = document.getElementById('seconds');
 let day2 = document.getElementById('days2');
let  hour2 = document.getElementById('hours2');
let  mint2 = document.getElementById('minutes2');
 let second2 = document.getElementById('seconds2');
 let imgBoys =document.getElementById('boy-bag');
 let day3 = document.getElementById('days3');
let  hour3 = document.getElementById('hours3');
let  mint3 = document.getElementById('minutes3');
 let second3 = document.getElementById('seconds3');
 let imgGirls =document.getElementById('girl-bag');
//  const upperDate = new Date('jan 29, 2022 00:00:00').getTime();
 let SportBag = new Date("March 7, 2022 23:59:59").getTime();
 let boyBag = new Date("March 5, 2022 23:59:59").getTime();
 let girltBag = new Date("March 4, 2022 23:59:59").getTime();
function countDown(lastD,d,h,m,s,img){
    const currentDate = new Date().getTime();
    const diffDate = lastD - currentDate;
    // alert(diffDate);
    const second = 1000;
    const minutes = second * 60;
    const hours = minutes * 60;
    const days = hours * 24; 
    //alert(diffDate/days);
    const remanDays = Math.floor(diffDate/days);
    // const remanHours = Math.floor(diffDate/hours);
    // const remanMintes = Math.floor(diffDate/minutes);
    // const remanSecondes = Math.floor(diffDate/second);
    // const remanDate = Math.ceil(diffDate/days);
    const remanHours = Math.floor((diffDate%days)/hours);
    const remanMintes = Math.floor((diffDate%hours)/minutes);
    const remanSecondes = Math.floor((diffDate%minutes)/second);
     // alert(remanMintes);
    // d = document.getElementById('days');
    //  h = document.getElementById('hours');
    //  m = document.getElementById('minutes');
    //  s = document.getElementById('seconds');
    d.innerHTML = remanDays;
    h.innerHTML = remanHours;
    m.innerHTML = remanMintes;
    s.innerHTML = remanSecondes;
    if(diffDate < 0){
        clearInterval(countDown());
        img.document.style.display ='none';
    }
    }
    setInterval(countDown(SportBag,day1,hour1,mint1,second1,imgSport),1000);
    //setInterval(countDown(){SportBag,day1,hour1,mint1,second1,imgSport},1000);
    setInterval(countDown(boyBag,day2,hour2,mint2,second2,imgBoys),1000);
    setInterval(countDown(girltBag,day3,hour3,mint3,second3,imgGirls),1000);

function ChangeLang(){                      
    var SelectLag = document.getElementById("SelectLag").value;
    var langegeTyp = document.getElementById("body");
    langegeTyp.style.direction = SelectLag;
}

const booksContiner = document.querySelector('.books');
const bookImage = document.querySelectorAll('.books div img');
// const bookImagedd = document.q
const preBookBtn = document.querySelector('#prevBtnBook' );
const nextBookBtn = document.querySelector('#nextBtnBook');
let bookCounter = 0;
const bookSize = bookImage[0].clientWidth;
booksContiner.style.transform = 'translateX(' +(bookSize * bookCounter) + 'px)';

nextBookBtn.addEventListener('click',()=>{
  
    // console.log(sliderImage.length -1);
    if(bookCounter >= bookImage.length -1) return;
booksContiner.style.transition = "transform 0.4s ease-in-out";
bookCounter++;
booksContiner.style.transform = 'translateX(' +(+bookSize  * booksContiner) + 'px)';
console.log(bookCounter);
});
preBookBtn.addEventListener('click',()=>{
    console.log(bookCounter);
    if(bookCounter <=0) return;
    // window.alert(counterSlide);
    // if(counterSlide <= (sliderImage.length -1)) return;
    booksContiner.style.transition = "transform 0.4s ease-in-out";
     bookCounter--;
    booksContiner.style.transform = 'translateX(' +(bookSize  * booksContiner) + 'px)';
    });






const showMenu = document.getElementById('menu-show');
const Menu = document.getElementById('nav');
// show menu
showMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    if(Menu.style.visibility === 'visible'){
        Menu.style.visibility ='hidden';
    }else{
        Menu.style.visibility ='visible';
    }
        
});


const slideFrame = document.querySelector('.slide-img-frame');
const sliderImage = document.querySelectorAll('.slide-img-frame img');

const sliderPreBtn = document.querySelector('#prevBtn' );
const sliderNextBtn = document.querySelector('#nextBtn');
let counterSlide = 0;
const sizeSlide = sliderImage[0].clientWidth;
slideFrame.style.transform = 'translateX(' +(sizeSlide * counterSlide) + 'px)';
// Button Listeners
// the slider of main imges
sliderNextBtn.addEventListener('click',()=>{
    // console.log(counterSlide);
    // console.log(sliderImage.length -1);
    if(counterSlide >= sliderImage.length -1) return;
slideFrame.style.transition = "transform 0.4s ease-in-out";
counterSlide++;
slideFrame.style.transform = 'translateX(' +(+sizeSlide  * counterSlide) + 'px)';

});
sliderPreBtn.addEventListener('click',()=>{
    // console.log(counterSlide);
    if(counterSlide <=0) return;
    // window.alert(counterSlide);
    // if(counterSlide <= (sliderImage.length -1)) return;
    slideFrame.style.transition = "transform 0.4s ease-in-out";
    counterSlide--;
    slideFrame.style.transform = 'translateX(' +(sizeSlide  * counterSlide) + 'px)';
    });
    // 
//     slideFrame.addEventListener ('transitionend', ()=>
// {
// if(sliderImage[counterSlide].id === 'last-clone'){ 
    
// slideFrame.style.transform = "none";
// counterSlide = slideFrame.length -2;
// slideFrame.style.transform = 'translateX(' +(-sizeSlide * counterSlide) + 'px)';
// }                                 
// if(sliderImage[counterSlide].id === 'first-clone'){ 
    
//     slideFrame.style.transform = "none";
//     counterSlide = slideFrame.length -counterSlide;
//     slideFrame.style.transform = 'translateX(' +(-sizeSlide * counterSlide) + 'px)';
//     }
// }
// );
//  img to catagres
const btnDisplay = document.getElementById('btn-display');
const pub = document.getElementById('PopUp');
const callImage = image => {
    document.getElementById("imgView").setAttribute("src",image.getAttribute("src"));
    // document.getElementById("PopUp").style.display = "block";
    pub.style.display ='block';
}

btnDisplay.addEventListener("click",(e)=>
{
    e.preventDefault();
    pub.style.display ='none';
}
);









// const showImgQ  = 
// const imgsConainerQ = document.getElementById('book-cat');
// const BodyBacQ = document.getElementById('body');
// let imgBtnQ =[];
// imgBtnQ = document.querySelectorAll('.book-img'); 
// imgBtnQ.forEach(element =>{
// element.addEventListener('click',(e)=>{
//     BodyBacQ.style.backgroundColor="black";
//     element.src = e.target.src;
// })
// }    
//     );


// for(let i=0;i<showImgQ.length;i++){
//     showImgQ[i].addEventListener('click',function(e){
//         imgsConainerQ.setAttribute('src',img);
//         BodyBacQ.style.backgroundColor= "gray";
//     })
// }


// const countDown=()=>{
//     const upperDate = new Date('jan 20, 2022 00:00:00').getTime();
//     const currentDate = new Date().getTime();
//     const diffDate = upperDate-currentDate;
//     // alert(diffDate);
//     const second = 1000;
//     const minutes = second * 60;
//     const hours = minutes * 60;
//     const days = hours * 24; 
//     //alert(diffDate/days);
//     const remanDays = Math.floor(diffDate/days);
//     // const remanHours = Math.floor(diffDate/hours);
//     // const remanMintes = Math.floor(diffDate/minutes);
//     // const remanSecondes = Math.floor(diffDate/second);
//     // const remanDate = Math.ceil(diffDate/days);
//     const remanHours = Math.floor((diffDate%days)/hours);
//     const remanMintes = Math.floor((diffDate%hours)/minutes);
//     const remanSecondes = Math.floor((diffDate%minutes)/second);
//     // alert(remanMintes);
//     var d = document.getElementById('days');
//     var h = document.getElementById('hours');
//     var m = document.getElementById('minutes');
//     var s = document.getElementById('seconds');
//     d.innerHTML = remanDays;
//     h.innerHTML = remanHours;
//     m.innerHTML = remanMintes;
//     s.innerHTML = remanSecondes;
//     }
//     setInterval(countDown,1000);
let ValidationForm = document.getElementById('login-regest');
let btnAllowed = document.getElementById('btn-allowed');
btnAllowed.addEventListener('click',(e) =>{
    e.preventDefault();
        //    preventDefault;
        ValidationForm.style.visibility ="hidden";
}    
 );
const btnRegest = document.getElementById('btn-regest');
const resgestForm = document.getElementById('regest');
btnRegest.addEventListener('click',(e) =>{
    e.preventDefault();
    ValidationForm.style.visibility ="hidden";
    resgestForm.style.visibility ="visible";
});
// const bookImgContainer = document.querySelectorAll('.book-img-container');
// const bookCat = document.getElementById('book-cat');
// const MainDiv = document.getElementById('main-div');
// const BodyBac = document.getElementById('body');
// // const CatSection = document.getElementById('cat-section');
// bookImgContainer.forEach(element => {
//  element.addEventListener("click",(e) => {
//     // CatSection.style.position ='absolute';
//     element.classList.add('chosen-img');
    

//  });
// });


// const deadline = '7/3/2022';
// // const deadline = 'March 31 2022 23:59:59 GMT+0200';

// function getTimeRemaining(endtime){
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor( (total/1000) % 60 );
//     const minutes = Math.floor( (total/1000/60) % 60 );
//     const hours = Math.floor( (total/(1000*60*60)) % 24 );
//     const days = Math.floor( total/(1000*60*60*24) );
  
//     return {
//       total,
//       days,
//       hours,
//       minutes,
//       seconds
//     };
//   }
// //   const total = Date.parse(endtime) - Date.parse(new Date());
// //   const seconds = Math.floor( (t/1000) % 60 );
  

