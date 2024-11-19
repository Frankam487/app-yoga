    const main = document.querySelector("main");


    //variable qui stoque tous les exercices
    let exerciseArray = [
        {
            pic: 0,
            min: 1
        },
        {
            pic: 1,
            min: 1
        },
        {
            pic: 2,
            min: 1
        },
        {
            pic: 3,
            min: 1
        },
        {
            pic: 4,
            min: 1
        },
        {
            pic: 5,
            min: 1
        },
        {
            pic: 6,
            min: 1
        },
        {
            pic: 7,
            min: 1
        },
        {
            pic: 8,
            min: 1
        },
        {
            pic: 9,
            min: 1
        },
    ];

    class Exercice {}

    const utilis = {

            pageContent: function(title, content, btn){
                document.querySelector('h1').innerHTML = title;
                main.innerHTML = content;
                document.querySelector('.btn-container').innerHTML = btn;
            },
    handleEventMinutes: function(){
        document.querySelectorAll('input[type="number"]').forEach((input) => {
            input.addEventListener('input', (e) => {
                exerciseArray.map((exo) => {
                    if(exo.pic == e.target.id){
                        exo.min = parseInt(e.target.value);
                        console.log(exerciseArray);
                    }
                })
            })
        })
    },
    handleEventArrow: function() {
        document.querySelectorAll('.arrow').forEach((arrow) => {
            arrow.addEventListener('click', (e) => {
                let position = 0;
                exerciseArray.map((exo) => {
                    if(exo.pic == e.target.dataset.pic && position !== 0){
                        [exerciseArray[position], exerciseArray[position -1]] = [exerciseArray[position -1], exerciseArray[position]];
                    page.lobby();
                    } else {
                        position++;
                        console.log(position);
                    }
                })
            })
        })
    }
        }
    const page = {
        lobby: function(){

    let mapArray = exerciseArray.map((exo) => 
    `
    <li>
    <div class="card-header">
        <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
        <span>min</span>
    </div>
    <img src="./img/${exo.pic}.png" />
    <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
    <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
    </li>
    `
    ).join("");

            utilis.pageContent("Parametrage <i class='fas fa-undo' id='reboot'></i>", "<ul>" + mapArray + "</ul>", "<button id='start'>Commencer <i class='far fa-play-circle'></i></button>"

            ); 
            utilis.handleEventMinutes();
            utilis.handleEventArrow();
        },
        routine: function (){
            
        utilis.pageContent("Routine",
        "Exercice avec chrono",
        null
    )
    },
    finish: function(){
        utilis.pageContent("C'est termine",
            "<button id='start'>Recommencer</button>","<button id='reboot'>Reinitialiser <i class='fas fa-times-circle'></i></button>",
            null
        )
        
        }
    }
    page.lobby();
