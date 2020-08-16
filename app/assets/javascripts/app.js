TweenMax.defaultEase = Linear.easeOut;

  new fullpage("#fullpage", {
    //options heres
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {


      const section = destination.item;
      const tl = new TimelineMax({ delay: 0.5 });

      if (document.getElementById('index-cover') != null) {
        const title = section.querySelector("h1");
        const par = section.querySelector("p");
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
        tl.fromTo(par, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
      }

      console.log(destination.index)
      

      let i = 0;
      const chairs = document.querySelectorAll(".chair");
      let l = chairs.length;

      while (i < l){

        if (destination.index == i) {
          
          const chairs = document.querySelectorAll(".chair");
          const description = document.querySelectorAll(".description");
          const title = document.querySelectorAll("h1");
          const sections = document.querySelectorAll(".section");
          let esp = document.querySelectorAll(".ESP");


          console.log(sections[i].style.background);

          rbgstring = sections[i].style.background;
          rbgstring = rbgstring.replace(/rgb/gi, '');
          rbgstring = rbgstring.replace(/,/gi, '');
          rbgstring = rbgstring.slice(1, rbgstring.length-1)
          
          console.log(rbgstring);

          if (isBright(rbgstring)) {

            
              let links = document.querySelectorAll("a");
              let logo = document.getElementById('logo');

              logo.style.borderRadius = "50%";
              logo.style.background = "white";let enSavoirPlus = document.getElementById("EnSavoirPlus");


              let ii = 0;
              let ll = links.length;

              while (ii < ll) {
                links[ii].style.color = "white";
                if (esp.length != 0) {
                  console.log('je suis la')
                  esp[i].style.borderBottom = "1px solid white";
                }
                ii +=1;
              }
          }

          else{

            let links = document.querySelectorAll("a");
            let logo = document.getElementById('logo');

            logo.style.borderRadius = "none";
            logo.style.background = "none";

            let ii = 0;
            let ll = links.length;

              while (ii < ll) {
                links[ii].style.color = "black";
                if (esp.length != 0) {
                  console.log('je suis laa')
                  esp[i].style.borderBottom = "1px solid black";
                }
                ii +=1;
              }
          }

          if (esp.length != 0) {
          tl.fromTo(chairs[destination.index], 0.7, { x: "200%" }, { x: "0%" })
            .fromTo(
              description[destination.index],
              0.5,
              { opacity: 0, y: "50" },
              { y: "0", opacity: 1 }
            )
            .fromTo(title[destination.index], 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 })
            .fromTo(chairs[destination.index], 1, { opacity: 1 }, { opacity: 1 })
            .fromTo(esp[destination.index], 0.1, { opacity: 0 }, { opacity: 1 })
          }

          if (esp.length === 0) {
            tl.fromTo(chairs[destination.index], 0.7, { x: "200%" }, { x: "0%" })
              .fromTo(
                description[destination.index],
                0.5,
                { opacity: 0, y: "50" },
                { y: "0", opacity: 1 }
              )
              .fromTo(title[destination.index], 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 })
              .fromTo(chairs[destination.index], 1, { opacity: 1 }, { opacity: 1 })
            }
        }
        i += 1;
      }

      
    }
  });



  const sections = document.querySelectorAll(".section");
  rgbsection0 = sections[0].style.background;
  rgbsection0 = rgbsection0.replace(/rgb/gi, '');
  rgbsection0 = rgbsection0.replace(/,/gi, '');
  rgbsection0 = rgbsection0.slice(1, rgbsection0.length-1)

  if (isBright(rgbsection0)) {
      let links = document.querySelectorAll("a");
      let enSavoirPlus = document.getElementById("EnSavoirPlus");
      let logo = document.getElementById('logo');

      logo.style.borderRadius = "50%";
      logo.style.background = "white";

      let ii = 0;
      let ll = links.length;

      while (ii < ll) {
        links[ii].style.color = "white";
        if (enSavoirPlus != null) {
          enSavoirPlus.style.borderBottom = "1px solid white";
        }
        ii +=1;
      }
  }

function isBright(color){
  let i = 0;
  let j = 0;
  let cut = [];
  while (i < color.length) {
    if (color[i] == " ") {
      cut[j] = i;
      j += 1;
    }
    i += 1;
  }

  let r = color.substring(0, cut[0]);
  let g = color.substring(cut[0] + 1, cut[1]);
  let v = color.substring(cut[1] + 1, color.length);

  if (parseInt(r) + parseInt(g) + parseInt(v) < 210) {
    return 1;
  }else{
    return 0;
  }
}