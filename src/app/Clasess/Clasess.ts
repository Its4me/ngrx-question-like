export class Message{
   public id: number = 0;
   static count = 0;
    constructor(
        public text: string,
        public likesCount?: number,
        public like: boolean = false
    ){
        this.likesCount = this.randomLikes();
        this.getId();
    }

    private randomLikes(): number{
        return Math.round(Math.random() * 3)
    }

    private getId(){
        this.id = Message.count;
        Message.count++;
    }
    
    
}