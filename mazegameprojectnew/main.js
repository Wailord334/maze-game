const canvas = document.querySelector("canvas");

const canvas_context = canvas.getContext("2d");

canvas.width = 1024 ;
canvas.height = 576;



const collisionmap = []
for (let i = 0; i < collisiondata2.length; i+=70) 
{
    collisionmap.push(collisiondata2.slice(i, i+70))
}

class Boundary {
    static width = 48
    static height = 48
    constructor({position})
    {
        this.position = position
        this.width = 48
        this.height = 48
    }
    draw()
    {
        canvas_context.fillStyle = 'rgba(0,0,0,0.2)'
        canvas_context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const offset = {
    x: 300,
    y: -1450
}
const boundaries = []

collisionmap.forEach((row, i) =>
{
    row.forEach((symbol, j) =>
    {
        if (symbol === 6)
        {
            boundaries.push(new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i* Boundary.height + offset.y
                }
            }))
        }
        
    })
})



const image = new Image();
image.src = 'assets/Map/Maze game 12 pixel mapTWO.png';

const playerImage = new Image();
playerImage.src = "assets/Player/Player/kanatac.png";

const item_1 = new Image();
item_1.src = "assets/Items/image0.png"

class Sprite {
    constructor({position, debug, image, frames = {max: 1}}) 
        { 
            this.position = position
            this.debug = debug
            this.image = image
            this.frames = frames

            this.image.onload = () => {
                this.width = this.image.width / this.frames.max
                this.height = this.image.height
                console.log(this.width)
                console.log(this.height)
            }
            
        }

    draw() {
        
        canvas_context.drawImage
        (this.image, 0, 0, this.image.width / this.frames.max, this.image.height, this.position.x, this.position.y, this.image.width / this.frames.max, this.image.height);
        }
    }

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },   
    image: image
    })

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    frames: {
        max: 1
    },
    image: playerImage
    })

const item_1actual = new Sprite({
    position: {
        x: 1670,
        y: -1280
    },
    frames: {
        max: 1
    },
    image: item_1
})

const keys = 
{
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


var lastKey

window.addEventListener('keydown', 
function(e)
{
    //console.log(e.key)
    switch(e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
});

window.addEventListener('keyup', 
function(e)
{
    console.log(e.key)
    switch(e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
});

const movables = [background, ...boundaries, item_1actual]

function collision({rect1, rect2})
{
    return (
        rect1.position.x + rect1.width >= rect2.position.x 
        && rect1.position.x <= rect2.position.x + rect2.width
        && rect1.position.y <= rect2.position.y +rect2.height
        && rect1.position.y + rect1.height >= rect2.position.y
    )
} 

function animate()
{
    window.requestAnimationFrame(animate)
    
    background.draw()
    
    boundaries.forEach((boundary) => {
        boundary.draw()
    })
    
    item_1actual.draw()
    player.draw()
    



    let moving = true
    let debug = true
    if (keys.w.pressed && lastKey === 'w') {
        for (let i=0; i<boundaries.length; i++)
        {
            const boundary = boundaries[i]
            if (
                collision({
                    rect1: player,
                    rect2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }}
                }) && debug === false)
                {
                    console.log("Colliding")
                    moving = false
                    break
                }
         }
        if (moving )
        {
        movables.forEach((movable) =>{ movable.position.y += 3})
        }
    }

    else if (keys.a.pressed && lastKey === 'a') 
    {
        for (let i=0; i<boundaries.length; i++)
        {
            const boundary = boundaries[i]
            if (
                collision({
                    rect1: player,
                    rect2: {...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y 
                    }}
                }) && debug === false)
                {
                    console.log("Colliding")
                    moving = false
                    break
                }
         }
        if (moving)
        {
        movables.forEach((movable) =>{ movable.position.x += 3})
        }
    }
    else if (keys.s.pressed && lastKey === 's') 
    {
        for (let i=0; i<boundaries.length; i++)
        {
            const boundary = boundaries[i]
            if (
                collision({
                    rect1: player,
                    rect2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }}
                }) && debug === false)
                {
                    console.log("Colliding")
                    moving = false
                    break
                }
         }
        if (moving)
        {
        movables.forEach((movable) =>{ movable.position.y -= 3})
        }
    }
    else if (keys.d.pressed && lastKey === 'd') 
    {   
        for (let i=0; i<boundaries.length; i++)
        {
            const boundary = boundaries[i]
            if (
                collision({
                    rect1: player,
                    rect2: {...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y 
                    }}
                }) && debug === false)
                {
                    console.log("Colliding")
                    moving = false
                    break
                }
         }
        if (moving)
        {
        movables.forEach((movable) =>{ movable.position.x -= 3})
        }
    }
};

animate()

console.log(canvas_context)
console.log(boundaries)
console.log("Completed")


