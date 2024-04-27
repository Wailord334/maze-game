const canvas = document.querySelector("canvas");

const canvas_context = canvas.getContext("2d");

let points = 0
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.id = "points"
document.body.appendChild(div);


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
        canvas_context.fillStyle = 'rgba(0,0,0,0)'
        canvas_context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const offset = {
    x: 300,
    y: -1450
}
const boundaries = []
const door = []

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

collisionmap.forEach((row, i) =>
{
    row.forEach((symbol, j) =>
    {
        if (symbol === 8)
        {
            door.push(new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i* Boundary.height + offset.y
                }
            }))
        }
    })
}
)




  
const image = new Image();
image.src = 'assets/Map/Maze game 12 pixel mapFINAL.png';

const playerImage = new Image();
playerImage.src = "assets/Player/Player/kanatac.png";

const item_1 = new Image();
item_1.src = "assets/Items/hokusaiM.png"

const item_2 = new Image();
item_2.src = "assets/Items/hajunM (1).png"

const item_3 = new Image();
item_3.src = "assets/Items/anneM (1).png"

const item_4 = new Image();
item_4.src = "assets/Items/ioriM (1).png"

const item_5 = new Image();
item_5.src = "assets/Items/kanataM (1).png"

const item_6 = new Image();
item_6.src = "assets/Items/naoakiraM (1).png"

const item_7 = new Image();
item_7.src = "assets/Items/nayutaM (1).png"

const item_8 = new Image();
item_8.src = "assets/Items/reoM (1).png"

const item_9 = new Image();
item_9.src = "assets/Items/ryuM (1).png"

const item_10 = new Image();
item_10.src = "assets/Items/satsukiM (1).png"

const item_11 = new Image();
item_11.src = "assets/Items/shikiM (1).png"

const item_12 = new Image();
item_12.src = "assets/Items/yoheiM (1).png"

const item_13 = new Image();
item_13.src = "assets/Items/zenM (1).png"

const invisible = new Image();
invisible.src = "assets/Texture/Tiled/maze-floor2.png"

// const Door = new Image();
// Door.src = "assets/Texture/Tiled/door.png"

class Sprite {
    constructor({position, debug, image, frames = {max: 1}, collected}) 
        { 
            this.position = position
            this.debug = debug
            this.image = image
            this.frames = frames
            this.collected = collected

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
    image: item_1,
    collected: false
    
})

const item_2actual = new Sprite({
    position: {
        x: 1270,
        y: -1280
    },
    frames: {
        max: 1
    },
    image: item_2,
    collected: false
    
})

const item_3actual = new Sprite({
    position: {
        x: 1670,
        y: -880
    },
    frames: {
        max: 1
    },
    image: item_3,
    collected: false
    
})

const item_4actual = new Sprite({
    position: {
        x: 2820,
        y: -1280
    },
    frames: {
        max: 1
    },
    image: item_4,
    collected: false
    
})

const item_5actual = new Sprite({
    position: {
        x: 470,
        y: -700
    },
    frames: {
        max: 1
    },
    image: item_5,
    collected: false
    
})

const item_6actual = new Sprite({
    position: {
        x: 1670,
        y: -880
    },
    frames: {
        max: 1
    },
    image: item_6,
    collected: false
    
})

const item_7actual = new Sprite({
    position: {
        x: 1670,
        y: -330
    },
    frames: {
        max: 1
    },
    image: item_7,
    collected: false
    
})

const item_8actual = new Sprite({
    position: {
        x: 1190,
        y: -310
    },
    frames: {
        max: 1
    },
    image: item_8,
    collected: false
    
})

const item_9actual = new Sprite({
    position: {
        x: 3440,
        y: -330
    },
    frames: {
        max: 1
    },
    image: item_9,
    collected: false
    
})

const item_10actual = new Sprite({
    position: {
        x: 3445,
        y: -700
    },
    frames: {
        max: 1
    },
    image: item_10,
    collected: false
    
})

const item_11actual = new Sprite({
    position: {
        x: 2535,
        y: -400
    },
    frames: {
        max: 1
    },
    image: item_11,
    collected: false
    
})

const item_12actual = new Sprite({
    position: {
        x: 2725,
        y: -520
    },
    frames: {
        max: 1
    },
    image: item_12,
    collected: false
    
})

const item_13actual = new Sprite({
    position: {
        x: 1715,
        y: 250
    },
    frames: {
        max: 1
    },
    image: item_13,
    collected: false
    
})

// const door = new Sprite({
//     position: {
//         x: 3000,
//         y: -1280
//     },
//     frames: {
//         max: 1
//     },
//     image: Door

// })

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

const items = [item_1actual, item_2actual, item_3actual, item_4actual, item_5actual, item_6actual, 
               item_7actual, item_8actual, item_9actual, item_10actual, item_11actual, item_12actual, item_13actual]

const movables = [background, ...boundaries, ...items, ...door]



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
    door.forEach((door) => {
        door.draw()
    })
    
    item_1actual.draw()
    item_2actual.draw()
    item_3actual.draw()
    item_4actual.draw()
    item_5actual.draw()
    item_6actual.draw()
    item_7actual.draw()
    item_8actual.draw()
    item_9actual.draw()
    item_10actual.draw()
    item_11actual.draw()
    item_12actual.draw()
    item_13actual.draw()

    player.draw()
    
    let ch = localStorage.getItem('ch')
    let x = localStorage.getItem('money')

    let moving = true
    let debug = false
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

        for (let i=0; i<door.length; i++)
        {
            const doorcollide = door[i]
           
            if (
                collision({
                    rect1: player,
                    rect2: {...doorcollide, position: {
                        x: doorcollide.position.x,
                        y: doorcollide.position.y + 3
                    }}
                }) && debug === false)
                {
                    if (ch<3) 
                    {
                    ch++ 
                    x1 = parseInt(x)
                    x = (x1 + 5).toString()
                    console.log(x)
                    console.log(x1)
                    localStorage.setItem('money', x.toString()) 
                    localStorage.setItem('ch', ch.toString()) }
                    else 
                    { 
                        location.href = "ch0.html" 
                        x1 = parseInt(x) 
                        y = parseInt(Math.floor(Math.random() * 11)) 
                        x = (x1 + y).toString() 
                        localStorage.setItem('money', x.toString())

                    }
                    console.log("Colliding with door")

                }
            }

        for (let i = 0; i<items.length; i++) 
        { 
            const item = items[i]
            
            if (
                collision({
                    rect1: player,
                    rect2: {...item, position: {
                        x: item.position.x,
                        y: item.position.y + 3
                    
                    }}
                }) && item.collected === false
                )
                { 
                    item.collected = true
                    item.image = invisible
                    points += 100
                    console.log(points)
                    console.log(item)
                    document.getElementById("points").innerText = "Points: " + points
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

        for (let i=0; i<door.length; i++)
        {
            const doorcollide = door[i]
           
            if (
                collision({
                    rect1: player,
                    rect2: {...doorcollide, position: {
                        x: doorcollide.position.x + 3,
                        y: doorcollide.position.y
                    }}
                }) && debug === false)
                {
                    if (ch<3) 
                    {
                    ch++ 
                    x1 = parseInt(x)
                    x = (x1 + 5).toString()
                    console.log(x)
                    console.log(x1)
                    localStorage.setItem('money', x.toString()) 
                    localStorage.setItem('ch', ch.toString()) }
                    else 
                    { 
                        location.href = "ch0.html" 
                        x1 = parseInt(x) 
                        y = parseInt(Math.floor(Math.random() * 11)) 
                        x = (x1 + y).toString() 
                        localStorage.setItem('money', x.toString())

                    }
                    console.log("Colliding with door")

                }
            } 

         for (let i = 0; i<items.length; i++) 
         {
             const item = items[i]
             
             if (
                 collision({
                     rect1: player,
                     rect2: {...item, position: {
                         x: item.position.x + 3,
                         y: item.position.y 
                     
                     }}
                 }) && item.collected === false
                 )
                 {
                     item.collected = true
                     item.image = invisible
                     points += 100
                     console.log(points)
                     console.log(item)
                     document.getElementById("points").innerText = "Points: " + points
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

        for (let i=0; i<door.length; i++)
        {
            const doorcollide = door[i]
           
            if (
                collision({
                    rect1: player,
                    rect2: {...doorcollide, position: {
                        x: doorcollide.position.x,
                        y: doorcollide.position.y - 3
                    }}
                }) && debug === false)
                {
                    if (ch<3) 
                    {
                    ch++ 
                    x1 = parseInt(x)
                    x = (x1 + 5).toString()
                    console.log(x)
                    console.log(x1)
                    localStorage.setItem('money', x.toString()) 
                    localStorage.setItem('ch', ch.toString()) }
                    else 
                    { 
                        location.href = "ch0.html" 
                        x1 = parseInt(x) 
                        y = parseInt(Math.floor(Math.random() * 11)) 
                        x = (x1 + y).toString() 
                        localStorage.setItem('money', x.toString())

                    }
                    console.log("Colliding with door")

                }
            } 
         
         for (let i = 0; i<items.length; i++) 
        {
            const item = items[i]
            
            if (
                collision({
                    rect1: player,
                    rect2: {...item, position: {
                        x: item.position.x,
                        y: item.position.y - 3
                    
                    }}
                }) && item.collected === false
                )
                {
                    item.collected = true
                    item.image = invisible
                    points += 100
                    console.log(points)
                    console.log(item)
                    document.getElementById("points").innerText = "Points: " + points
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

        for (let i=0; i<door.length; i++)
        {
            const doorcollide = door[i]
           
            if (
                collision({
                    rect1: player,
                    rect2: {...doorcollide, position: {
                        x: doorcollide.position.x - 3,
                        y: doorcollide.position.y 
                    }}
                }) && debug === false)
                {
                    if (ch<3) 
                    {
                    ch++ 
                    x1 = parseInt(x)
                    x = (x1 + 5).toString()
                    console.log(x)
                    console.log(x1)
                    localStorage.setItem('money', x.toString()) 
                    localStorage.setItem('ch', ch.toString()) }
                    else 
                    { 
                        location.href = "ch0.html" 
                        x1 = parseInt(x) 
                        y = parseInt(Math.floor(Math.random() * 11)) 
                        x = (x1 + y).toString() 
                        localStorage.setItem('money', x.toString())

                    }
                    console.log("Colliding with door")

                }
            } 

         for (let i = 0; i<items.length; i++) 
        {
            const item = items[i]
            
            if (
                collision({
                    rect1: player,
                    rect2: {...item, position: {
                        x: item.position.x - 3,
                        y: item.position.y 
                    
                    }}
                }) && item.collected === false
                )
                {
                    item.collected = true
                    item.image = invisible
                    points += 100
                    console.log(points)
                    console.log(item)
                    document.getElementById("points").innerText = "Points: " + points
                }
            
        }
        if (moving)
        {
        movables.forEach((movable) =>{ movable.position.x -= 3})
        }
    }
};

animate()
var audio = new Audio('audio_file.mp3');
audio.loop = true
audio.play();
console.log(canvas_context)
console.log(boundaries)
console.log("Completed")


