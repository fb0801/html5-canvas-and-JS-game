const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')


canvas.width = window.innerWidth;
canvas.height = innerHeight;


class Player{
    constructor(x,y,radius,color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
    }
}
class Projectile{
    constructor(x,y, radius, color, velocity){
        this.x=x
        this.y=y
        this.radius= radius
        this.color = color
        this.velocity = velocity
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Projectile{
    constructor(x,y, radius, color, velocity){
        this.x=x
        this.y=y
        this.radius= radius
        this.color = color
        this.velocity = velocity
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}



const x = canvas.width/2

const y = canvas.height/2

const player = new Player(x, y, 30, 'blue') //cords of object

const projectile = new Projectile(
    canvas.width / 2,
    canvas.height / 2,
    5, 
    'red', 
    {
        x:1,
        y:1
    }
)   

const projectile2 = new Projectile(
    canvas.width / 2,
    canvas.height / 2,
    5, 
    'green', 
    {
        x:-1,
        y:-1
    }
)
    const projectiles = [] //hold projectiles 

function spawnEnemies(){
    setInterval() => {
        const x = 0 - radius
        const y = math.random() * canvas.height
        const radius = 30
        const color = 'green'
        const angle = Math.atan2(
            canvas.height / 2 - y,
            canvas.width / 2 - x)
        const velocity = {
            x:Math.cos(angle),
            y:Math.sin(angle)
        }

        enemies.push(new Enemy(x,y,radius,color, velocity))
    }, 1000
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)//draw the bullets anc clr screen
    player.draw()//displays the plater

    projectiles.foreach(Projectile => {
        Projectile.update()
    })
    enemies.foreach(enemy => {
        enemy.update()
    })
}


addEventListener('click', (event) =>{
const angle = Math.atan2(event.clientY - canvas.width / 2,
    event.clientX - canvas.width / 2)
const velocity = {
    x:Math.cos(angle),
    y:Math.sin(angle)
}

    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 
        5, 'red', velocity)
          )
    
})

animate()