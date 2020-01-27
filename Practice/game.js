window.addEventListener('load', () => {

    let intro = document.getElementById('intro');
    let whoAreYouSection = document.getElementById('whoAreYou');
    
    let startButton = document.getElementById('start-button');

    startButton.addEventListener('mousemove',movementColor);
    startButton.addEventListener('click', start);
    
    let positionX;
    let positionY;
    let positionXY;

    function movementColor(e){
        
        positionX = e.offsetX;
        positionY = e.offsetY;
        positionXY = (positionX+positionY)/2;

        document.body.style.backgroundColor = "rgb("+positionX+"," +positionY+","+positionXY+")";
        /*
        if(positionX > 70 && positionY < 255 ){document.body.style.backgroundColor = "rgb("+positionX+"," +positionY+","+positionXY+")";}
        else if(positionX > 70 && positionY < 255){document.body.style.backgroundColor = "rgb("+positionY+"," +positionX+","+positionXY+")";}
        else {document.body.style.backgroundColor = "rgb("+positionXY+"," +positionX+","+positionY+")";}
        */
    }

    let hello = intro.firstElementChild;
    let welcomeTo = hello.nextElementSibling;
    let hangTight = welcomeTo.nextElementSibling;
    let next = hangTight.nextElementSibling;
    let next2 = next.nextElementSibling;
    let next3 = next2.nextElementSibling;

    

    function start(){
        
        document.body.style.backgroundColor = "rgb("+positionX+"," +positionY+","+positionXY+")";

        startButton.classList.add('hidden');
        hello.classList.remove('hidden');

        hello.addEventListener('click', next =>{ 
            hello.classList.add('hidden');
            welcomeTo.classList.remove('hidden');
        });

        welcomeTo.addEventListener('click', next2 => {
            welcomeTo.classList.add('hidden');
            hangTight.classList.remove('hidden');
        });

    
        hangTight.onclick = function() {next.classList.remove('hidden');};

        next.onmouseenter = function() {
            next.classList.add('hidden');
            
            next2.classList.remove('hidden');
        };

        next2.onmouseenter = function() {
            next2.classList.add('hidden');
            
            next3.classList.remove('hidden');
        };

        next3.onclick = function() {whoAreYou()};
        
    }

    function whoAreYou(){
        hangTight.classList.add('hidden');
        next3.classList.add('hidden');

        whoAreYouSection.classList.remove('hidden');
    }

    /*
    function textTransitions1(){

        let sectionIntro = document.getElementById('intro');
        
        let phrases= ['Hello there...', 'Welcome to an interactive display of me trying to save my ass in the LTW final', 'This will be fun, so hang tight'];

        
        let newh1 = document.createElement('h1');
        //newh1.className = 'hidden';
        newh1.className = 'phrase';
        let newText1 = document.createTextNode('Hello there...');
        newh1.appendChild(newText1);
        //sectionIntro.appendChild(newh1);
        fadeIn(sectionIntro.appendChild(newh1), 160);
        fadeOut(sectionIntro.appendChild(newh1), 60);
        //sectionIntro.removeChild(newh1);

        textTransitions2();
        
    }
    function textTransitions2(){
        let newh2 = document.createElement('h1');
        //newh1.className = 'hidden';
        newh2.className = 'phrase';
        let newText2 = document.createTextNode('Welcome to an interactive display of me trying to save my ass in the LTW final');
        newh2.appendChild(newText2);
        //sectionIntro.appendChild(newh1);
        fadeIn(sectionIntro.appendChild(newh2), 160);
        fadeOut(sectionIntro.appendChild(newh2), 1060);
        //sectionIntro.removeChild(newh2);
        textTransitions3();
    }
    function textTransitions3(){
        
        let newh3 = document.createElement('h1');
        //newh1.className = 'hidden';
        newh3.className = 'phrase';
        let newText3 = document.createTextNode('This will be fun, so hang tight');
        newh3.appendChild(newText3);
        //sectionIntro.appendChild(newh1);
        fadeIn(sectionIntro.appendChild(newh3), 160);
        fadeOut(sectionIntro.appendChild(newh3), 1060);
        //sectionIntro.removeChild(newh3);
    }
    */
    /*
    const fadeOut = (elem, delay) => {
        
        let op = elem.style.opacity;

        let timer = setInterval(() => {
            if (op <= 0.1) clearInterval(timer);

            elem.style.opacity = op;
            elem.style.filter = `alpha(opacity= ${op * 100}`;

            op -= op * 0.1;
        }, delay);
    }

    const fadeIn = (elem, delay) => {
        
        let op = 0.2;

        let timer = setInterval(() => {

            if (op >= 1) clearInterval(timer)

            elem.style.opacity = op
            elem.style.filter = `alpha(opacity= ${op * 100}`

            op += op * 0.1;
        }, delay);
    }
    */
});