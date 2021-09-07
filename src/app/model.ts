export class Model{
    user;
    items: any;

    constructor(){
        this.user="Çınar";
        this.items=[
            new TodoItem("Spor",false),
            new TodoItem("Kahvaltı",true),
            new TodoItem("Kitap Oku",false),
            new TodoItem("ders Çalış",true),
          ];
    }
}

export class TodoItem{
    description:string;
    action:boolean;

    constructor(description: string, action: boolean){
        this.description=description;
        this.action=action;
    }
}