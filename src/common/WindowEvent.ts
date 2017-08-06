export function WindowEvent(queryFlag:string,negate:boolean = false,eventName:string = "click"){
  return (target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
      const original: (...args: any[]) => any = descriptor.value;
      descriptor.value = function(this:any,e:any){
        if(!this.$$windowHandlers){
          this.$$windowHandlers = {};
        }
        if(!this.$$windowHandlers[key]){
          // need to register handler
          this.$$windowHandlers[key] = (e:any)=>{
            if((!negate && this[queryFlag]) || (negate && !this[queryFlag])){
              original.call(this,e);
            }
          };
          // TODO possibility to create memory leak
          document.body.addEventListener(eventName,this.$$windowHandlers[key]);
        }
        return original.call(this,e);
      };
      return descriptor;
  };
}
