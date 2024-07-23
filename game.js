let acc_time = 0;
let GameState = 1;

class Ball
{
    constructor()
    {
        this.x = 360;
        this.y = getRandomInt(740);
        this.radius = 20;
        this.movespeed = 1;
    }

    update()
    {
        this.x -= (this.movespeed + acc_time);
    }
    
    render()
    {
        circle(this.x, this.y, this.radius);
    }
}

class Paddle
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
    }

    update()
    {

    }

    render()
    {

    }
}

let ballArray = [];

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function setup() {
    frameRate(60);
    acc_time = 0;
}

function update()
{
    switch(GameState)
    {
        case 0:
            break;
        case 1:
            ballArray.push(new Ball);
            for(i = 0; i < ballArray.length; ++i)
            {
                ballArray[i].update();
            }
            break;
        case 2:
            break;
    }
}



function draw() {
    update();

    switch(GameState)
    {
        case 0:
            createCanvas(360, 740);
            background(220);
            textSize(30);
            text("Catch Ball", 100, 200);
            testball.render();
            break;
        case 1:
            createCanvas(360, 740);
            background(220);
            for(i = 0; i < ballArray.length; ++i)
                {
                    ballArray[i].render();
                }

            break;
        case 2:
            break;
    }


    acc_time += 0.001;
}

