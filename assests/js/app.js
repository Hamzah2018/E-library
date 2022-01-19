const countDown=()=>{
    const upperDate = new Date('jan 20, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate-currentDate;
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
    var d = document.getElementById('days');
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');
    d.innerHTML = remanDays;
    h.innerHTML = remanHours;
    m.innerHTML = remanMintes;
    s.innerHTML = remanSecondes;
    }
    setInterval(countDown,1000);
let ValidationForm = document.getElementById('login-regest');
let btnAllowed = document.getElementById('btn-allowed');
btnAllowed.addEventListener('click',(e) =>{
    e.preventDefault();
        //    preventDefault;
        ValidationForm.style.visibility ="hidden";
}    
 );

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
  

