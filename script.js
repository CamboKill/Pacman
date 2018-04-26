window.onload = () => {
    let canvas = document.getElementById('xD');
    canvas.width = 640;
    canvas.height = 640;
    let c = canvas.getContext('2d');

    let kolko = new Circle();
    let world = new World();
    
    let pacman = new Pacman();

    let koleczka = [];
    for (let i = 0; i < 20; i++) {
        let newCircle = new Circle();
        newCircle.x = (parseInt(Math.random()*17+1) * 32) + 48.5; 
        newCircle.y = (parseInt(Math.random()*17+1) * 32) + 47.5;
        newCircle.color = "red"; 
        koleczka.push(newCircle);
    }

    let left, right, up, down = false;


    let a, d, w, s = false;


    window.addEventListener('keydown', move, false);
    window.addEventListener('keyup', stop, false);

    function move(event) {
        let keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                left = true;
                right = false;
                up = false;
                down = false;
                break;
            case 38:
                up = true;
                down = false;
                right = false;
                left = false;
                break;
            case 39:
                right = true;
                up = false;
                down = false;
                left = false;
                break;
            case 40:
                down = true;
                left = false;
                right = false;
                up = false;
                break;
        };
        event.preventDefault();
    };

    function stop(event) {
        let keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                left = false;
                right = false;
                up = false;
                down = false;
                break;
            case 38:
                up = false;
                down = false;
                right = false;
                left = false;
                break;
            case 39:
                up = false;
                down = false;
                right = false;
                left = false;
                break;
            case 40:
                up = false;
                down = false;
                right = false;
                left = false;
                break;
        };
        event.preventDefault();
    };

    function update() {
        if (up && pacman.y > 49) {
            pacman.y -= 32;
            pacman.back();
        }
        if (down && pacman.y <= canvas.height-47.5) {
            pacman.y += 32;
            pacman.forward();
        }
        if (right && pacman.x <= canvas.width-48.5) {
            pacman.x += 32;
            pacman.right();
        }
        if (left && pacman.x > 49) {
           pacman.x -= 32;
            pacman.left();
        }
        if(pacman.y == 271.5 && pacman.x == 48.5 && left){
            pacman.x = 48.5 + 32*17;
        }
        if(pacman.y == 303.5 && pacman.x == 48.5 && left){
            pacman.x = 48.5 + 32*17;
        }
        if(pacman.y == 271.5 && pacman.x == 592.5 && right){
            pacman.x = 48.5;
        }
        if(pacman.y == 303.5 && pacman.x == 592.5 && right){
            pacman.x = 48.5;
        }
        for (let i = koleczka.length - 1; i >= 0; i--){
            if(koleczka[i] == undefined){
            }
            else {
                if(koleczka[i].x == pacman.x && koleczka[i].y == pacman.y){
                    delete koleczka[i]; 
                }
            }
        }
    };

    function draw() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        world.draw(c);
        pacman.draw(c);
        for (let i = koleczka.length - 1; i >= 0; i--) {
            if(koleczka[i] == undefined){
            }
            else{
               koleczka[i].draw(c); 
            }   
        }
    };

    MainLoop.setUpdate(update).setSimulationTimestep(100).setDraw(draw).start();

};