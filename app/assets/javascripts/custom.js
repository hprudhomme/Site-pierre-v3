let n_button = document.querySelectorAll(".next-button");
let p_button = document.querySelectorAll(".previous-button");


function next(){
    id = this.id;
    count = 1;

    bloc_id = "b"+this.id;

    let bloc = document.querySelectorAll(".bloc");


    bloc.forEach(box => {
        // console.log(box.id)
        if (box.id == bloc_id) {
            if (box.classList == 'blo-cover bloc' || box.classList == 'bloc blo-cover' ) {
                var x = true;
            }else{
                var x = false;
            }

            if (x) {
                box.classList.remove('blo-cover');
                box.classList.add('bli');
            }else{
                box.classList.remove('blo');
                box.classList.add('bli');
            }
            let next_bloc_id = "b"+count.toString();
            let next_bloc = document.getElementById(next_bloc_id);

            if (next_bloc == null) {
                if (x) {
                    bloc[0].classList.add('blo-cover');
                    bloc[0].classList.remove('bli');
                }else{
                    bloc[0].classList.add('blo');
                    bloc[0].classList.remove('bli');
                }
            }else{
                if (x) {
                    next_bloc.classList.remove('bli');
                    next_bloc.classList.add('blo-cover');
                }else{
                    next_bloc.classList.remove('bli');
                    next_bloc.classList.add('blo');
                }
            }
        }
        count += 1;
    });
}

function previous(){
    id = this.id;

    bloc_id = "b"+this.id;

    let bloc = document.querySelectorAll(".bloc");
    count = parseInt(this.id) - 1;



    bloc.forEach(box => {
        // console.log(box.id)
        if (box.id == bloc_id) {
            if (box.classList == 'blo-cover bloc' || box.classList == 'bloc blo-cover' ) {
                var x = true;
            }else{
                var x = false;
            }

            if (x) {
                box.classList.remove('blo-cover');
                box.classList.add('bli');
            }else{
                box.classList.remove('blo');
                box.classList.add('bli');
            }

            let previous_bloc_id = "b"+count.toString();
            let previous_bloc = document.getElementById(previous_bloc_id);

            if (previous_bloc == null) {
                if (x) {
                    bloc[bloc.length - 1].classList.add('blo-cover');
                    bloc[bloc.length - 1].classList.remove('bli');
                }else{
                    bloc[bloc.length - 1].classList.add('blo');
                    bloc[bloc.length - 1].classList.remove('bli');
                }
            }else{
                if (x) {
                    previous_bloc.classList.remove('bli');
                    previous_bloc.classList.add('blo-cover');
                }else{
                    previous_bloc.classList.remove('bli');
                    previous_bloc.classList.add('blo');
                }
            }
        }
    });
}




n_button.forEach(item => {
    item.addEventListener('click', next)
});

p_button.forEach(item => {
    item.addEventListener('click', previous)
});


//navbar 

var open = document.getElementById('hamburger');
    var changeIcon = true;
    
    open.addEventListener("click", function(){
    
        var overlay = document.querySelector('.overlay');
        var nav = document.querySelector('nav');
        var icon = document.querySelector('.menu-toggle i');
        var container = document.querySelector('.container');
        var content1 = document.getElementById('content1');
    
    
        overlay.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
    
        if (changeIcon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");              
            changeIcon = false;
        }
        else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            changeIcon = true;
        }
    });



    //landing page


    let rectangle = document.getElementById('rectangle');
    let nav =  document.querySelector('header')



const t1 = new TimelineMax();

t1.fromTo(
    rectangle,
    2,
    { height: "100%",},
    { height: "70%", ease: Power2.easeInOut},
  )
  .fromTo(
    rectangle,
    2,
    { width: "100%"},
    { width:"70%", ease: Power2.easeInOut},
  )

  var larg = (window.innerWidth);
  console.log(larg)



  // text anime

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  function animetext(){
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap";
    document.body.appendChild(css);
  };

  setTimeout(function() { animetext(); }, 6000);

  setTimeout(function() { anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [10,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  })
  ; }, 4000);

