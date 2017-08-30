export default class HorizontalGridGenerator{

    public static instance:HorizontalGridGenerator = new HorizontalGridGenerator();

    public horizontalGrid:{left:number,time:number,label:string,importance:number}[] = [];

    public maxMoment:number = 10000;

    public defaultGridSize:number = 30;

    public defaultTimeDivisor:number = 100;

    public startFrom:number = -100;

    public _scale:number = 1;

    private minScale = 0.01;

    private maxScale = 10;

    public get timelineWidth():number{
        return this.timeToLeft(this.maxMoment);
    }

    public get scale():number{
        return this._scale;
    }
    
    public set scale(val:number){
        val = Math.max(this.minScale,Math.min(val,this.maxScale));
        this._scale = val;
        this._update();
    }

    constructor(){
        this._update();
    }
    
    private _update():void{
        this.horizontalGrid.splice(0,this.horizontalGrid.length);
        let current = this.timeToLeft(this.startFrom/this.scale);
        while(this.timeToLeft(this.maxMoment) >= current){
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
            return `${time.toFixed(2)}ms`;
        }else{
            return `${(time/1000).toFixed(2)}s`;
        }
    }

    public timeToLeft(time:number):number{
        time -= this.startFrom/this.scale;
        return time/this.defaultTimeDivisor * this.defaultGridSize * this.scale;
    }

    public leftToTime(left:number):number{
        return this.leftDeltaToTime(left) + this.startFrom/this.scale;
    }

    public leftDeltaToTime(delta:number):number{
        return delta * this.defaultTimeDivisor / this.defaultGridSize / this.scale;
    }
}