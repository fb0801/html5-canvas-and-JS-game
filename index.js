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


const x = canvas.width/2

const y = canvas.height/2

const player = new Player(x, y, 30, 'blue') //cords of object
player.draw()
const projectiles = [] //hold projectiles
/*
const projectile = new Projectile(
    canvas.width / 2,
    canvas.height / 2,
    5, 
    'red', 
    {
        x:1,
        y:1
    }
)   31.32
*/
function animate() {
    requestAnimationFrame(animate)
   // projectile.draw()
    //projectile.update()
    projectiles.foreach(Projectile => {
        Projectile.update()
    })
}


window.addEventListener('click', (event) =>{
    
    
})