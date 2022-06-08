class Ground{
    constructor(x,y,w,h){
       this.w = w
       this.h = h
       let options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x,y,w,h,options)
       World.add(world,this.body)
    }

    show(){
        let pos = this.body.position
        push()
        fill(180,67,190)
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}