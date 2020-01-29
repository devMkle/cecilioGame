class Cigar{
    constructor(ctx,w,h){
        this.ctx=ctx
        this.gameWidth = w
        this.gameHeight = h
        this.width = 30
        this.height = 30
        this.image = new Image()
        this.image.src = "img/ntd/poro.jpeg"
        this.posX = this.gameWidth *0.03 + 80
        this.posY = 50
        this.uses = 0;
    }

    getUses(){
        return this.uses
    }

    setUses(num){
        this.uses = num
    }
    
    action(){
        if(this.uses>0){
            this.uses--
            return 90
        }else{
            return -10
        }
    }
        
    draw(){
        this.ctx.drawImage(this.image,this.posX,this.posY+50,this.width,this.height)
        this.ctx.font = '18px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`${this.uses}`, this.posX+15, 90);
    }
}