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
            if (box.classList == 'd-flex blo-cover bloc' || box.classList == 'd-flex bloc blo-cover' ) {
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
            if (box.classList == 'd-flex blo-cover bloc' || box.classList == 'd-flex bloc blo-cover' ) {
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