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


      

      let i = 0;
      const chairs = document.querySelectorAll(".chair");
      let l = chairs.length;

      while (i < l){

        if (destination.index == i) {
          
          const chairs = document.querySelectorAll(".chair");
          const description = document.querySelectorAll(".description");
          const title = document.querySelectorAll("h1");

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
        i += 1;
      }

      
    }
  });
