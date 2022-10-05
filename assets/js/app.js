function validationSubscribeFrom(){
  let emailto = document.forms ["subsForm"] ["emailAddress"].value;
  if(emailto == ""){
    alert("Email harus diisi terlebih dahulu !");
    // return false;
  } else{
    alert("Terimamkasih, Anda selangkah lebih dekat dengan kami !");
  }
}

function myFunction(){
  // document.getElementById("frm1").submit();
  let email = document.getElementById("email").value;

  if(email != ""){
    alert("Terimamkasih, Anda selangkah lebih dekat dengan kami !");
    return true;
  }else{
    alert("Email harus diisi terlebih dahulu !");
  }
}

let burger = document.querySelector(".burger");
let span = document.querySelectorAll("span");
let navMenu = document.querySelector(".menu");
let header = document.querySelector('.header');

burger.onclick = () => {
  span[0].classList.toggle("efect1");
  span[1].classList.toggle("efect2");
  span[2].classList.toggle("efect3");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // akses.classList.toggle("active");
})

document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// let myMediaQuery = window.matchMedia('(min-width: 993px) and (max-width: 1024px)');
// let applyMediaQuery = (event) =>{
//   if((event.matches) || (window.addEventListener('scroll', () => {
//     let sc = document.documentElement.scrollTop && document.body.scrollTop;
//     if(sc > 0){
//       header.style.setProperty('position', 'fixed');
//       header.style.setProperty('left', '50%');
//       header.style.setProperty('top', '5%');
//       header.style.setProperty('width', '100%');
//       header.style.setProperty('transform', 'translate(-50%, -50%)');
//       header.style.setProperty('padding', '1% 0');
//       header.style.setProperty('background', 'black');
//       header.style.setProperty('overflow', 'hidden');
//     }else{
//       header.style.removeProperty('position');
//       header.style.removeProperty('left');
//       header.style.removeProperty('top');
//       header.style.removeProperty('width');
//       header.style.removeProperty('transform');
//       header.style.removeProperty('padding');
//       header.style.removeProperty('background');
//     }
//   }))){
//     console.log('Ukuran layar sesuai, dan bisa scroll');
//   }else{
//     console.log('Ukuran layar tidak sesuai, dan tidak bisa scroll');
//   }
// }
// myMediaQuery.addEventListener('change', applyMediaQuery);
// applyMediaQuery(myMediaQuery);
// myMediaQuery.removeEventListener('change', applyMediaQuery);



// let myMediaQuery = window.matchMedia('(min-width: 993px) and (max-width: 1024px)');
// let applyMediaQuery = (event) => {
//   if(event.matches){
//     console.log('true');
//   }else{
//     console.log('false');
//   }
// }
// myMediaQuery.addEventListener('change', applyMediaQuery);

// let scrollActive = window.addEventListener('scroll', () => {
//   if((document.documentElement.scrollTop) || (document.body.scrollTop)){
//     console.log('scroll active');
//   }else{
//     console.log('scroll tidak aktif');
//   }
// })

// Sukses Test
let scrollFunction = () => {
  let mqMobile = window.matchMedia('(min-width: 320px) and (max-width: 576px)');
  let mqTablet = window.matchMedia('(min-width: 577px) and (max-width: 768px)');
  let mqDekstop = window.matchMedia('(min-width: 769px) and (max-width: 992px)');
  let mqDekstopLarge = window.matchMedia('(min-width: 993px)and (max-width: 1024px)');

  if(mqMobile.matches){
    if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
      header.style.setProperty('position', 'fixed');
      header.style.setProperty('left', '50%');
      header.style.setProperty('top', '4%');
      header.style.setProperty('width', '100%');
      header.style.setProperty('transform', 'translate(-50%, -50%)');
      header.style.setProperty('padding', '0 5%');
      header.style.setProperty('background', '#FF74B1');
      navMenu.style.setProperty('top', '98%');
      // header.style.setProperty('overflow', 'hidden');
    }else{
      header.style.removeProperty('position');
      header.style.removeProperty('left');
      header.style.removeProperty('top');
      header.style.removeProperty('width');
      header.style.removeProperty('transform');
      header.style.removeProperty('padding');
      header.style.removeProperty('background');
      navMenu.style.removeProperty('top');
    }
  }else if(mqTablet.matches){
    if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
      header.style.setProperty('position', 'fixed');
      header.style.setProperty('left', '50%');
      header.style.setProperty('top', '4.5%');
      header.style.setProperty('width', '100%');
      header.style.setProperty('transform', 'translate(-50%, -50%)');
      header.style.setProperty('padding', '0 5%');
      header.style.setProperty('background', '#FF74B1');
      navMenu.style.setProperty('top', '99%');
      // navMenu.style.setProperty('overflow', 'hidden');
    }else{
      header.style.removeProperty('position');
      header.style.removeProperty('left');
      header.style.removeProperty('top');
      header.style.removeProperty('width');
      header.style.removeProperty('transform');
      header.style.removeProperty('padding');
      header.style.removeProperty('background');
      navMenu.style.removeProperty('top');
    }
  }else if(mqDekstop.matches){
    if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
      header.style.setProperty('position', 'fixed');
      header.style.setProperty('left', '50%');
      header.style.setProperty('top', '5%');
      header.style.setProperty('width', '100%');
      header.style.setProperty('transform', 'translate(-50%, -50%)');
      header.style.setProperty('padding', '0 5%');
      header.style.setProperty('background', '#FF74B1');
      navMenu.style.setProperty('top', '99%');
    }else{
      header.style.removeProperty('position');
      header.style.removeProperty('left');
      header.style.removeProperty('top');
      header.style.removeProperty('width');
      header.style.removeProperty('transform');
      header.style.removeProperty('padding');
      header.style.removeProperty('background');
      navMenu.style.removeProperty('top');
    }
  }else if(mqDekstopLarge.matches){
    if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
      header.style.setProperty('position', 'fixed');
      header.style.setProperty('left', '50%');
      header.style.setProperty('top', '5%');
      header.style.setProperty('width', '100%');
      header.style.setProperty('transform', 'translate(-50%, -50%)');
      header.style.setProperty('padding', '0 5%');
      header.style.setProperty('background', '#FF74B1');
      // header.style.setProperty('overflow', 'hidden');
    }else{
      header.style.removeProperty('position');
      header.style.removeProperty('left');
      header.style.removeProperty('top');
      header.style.removeProperty('width');
      header.style.removeProperty('transform');
      header.style.removeProperty('padding');
      header.style.removeProperty('background');
    }
  }
}
window.addEventListener('scroll', scrollFunction);
// window.top.location = window.top.location
// window.removeEventListener('scroll', scrollFunction);


// const myMq = [
//   window.matchMedia('(min-width: 320px) and (max-width: 576px)'),
//   window.matchMedia('(min-width: 577px) and (max-width: 768px)'),
//   window.matchMedia('(min-width: 769px) and (max-width: 992px)'),
//   window.matchMedia('(min-width: 993px) and (max-width: 1024px)')
// ];

// let applyMediaQuery = (event) => {
//   if(event.matches){
//     document.body.style.backgroundColor = 'black';
//   }if(event.matches){
//     document.body.style.backgroundColor = 'yellow';
//   }if(event.matches){
//     document.body.style.backgroundColor = 'red';
//   }if(event.matches){
//     document.body.style.backgroundColor = 'gray';
//   }
// }

// myMq.forEach((event) => {
//   // console.log(event);
//   applyMediaQuery(event);
//   // console.log(applyMediaQuery);
//   event.addEventListener('change', applyMediaQuery);
  
// })


