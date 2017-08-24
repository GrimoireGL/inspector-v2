export default class HorizontalGridGenerator{

    public static instance:HorizontalGridGenerator = new HorizontalGridGenerator();

    public horizontalGrid:{left:number,time:number,label:string,importance:number}[] = [];

    public maxMoment:number = 10000;

    public defaultGridSize:number = 30;

    public defaultTimeDivisor:number = 100;

    public startFrom:number = -100;

    public _scale:number = 1;

    public get scale():number{
        return this._scale;
    }
    
    public set scale(val:number){
        this._scale = val;
        this._update();
    }

    constructor(){
        this._update();
    }
    
    private _update():void{
        this.horizontalGrid.splice(0,this.horizontalGrid.length);
        let current = this.timeToLeft(this.startFrom/this.scale);
        while(this.maxMoment > current){
            let importance = 0;
            const time = this.leftToTime(current);
            if(time === 0){
                importance = 3;
            }else if((current/this.defaultGridSize - 1) % 10 === 0){
                importance = 2;
            }else if((current/this.defaultGridSize - 1) % 5 === 0){
                importance = 1;
            }
            this.horizontalGrid.push({left:current,time:time,label:this.toTimeLabel(time),importance:importance})
            current += this.defaultGridSize;
        }
    }

    public toTimeLabel(time:number):string{
        if(this.defaultTimeDivisor / this._scale < 100){
            return `${time}ms`;
        }else{
            return `${time/1000}s`;
        }
    }

    public timeToLeft(time:number):number{
        time -= this.startFrom/this.scale;
        return time/this.defaultTimeDivisor * this.defaultGridSize * this.scale;
    }

    public leftToTime(left:number):number{
        return left * this.defaultTimeDivisor / this.defaultGridSize / this.scale + this.startFrom/this.scale;
    }
}