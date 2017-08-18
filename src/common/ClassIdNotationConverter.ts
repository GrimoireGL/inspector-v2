export default class ClassIdNotationConverter{
    public static convert(id:string,className:string|string[],defaultStr = "(No name)"):string{
        if(typeof className === "string"){
            className = className.split(" ");
        }
        let classNameStr = "";
        for(let i = 0; i < className.length; i++){
            if(className[i] === ""){
                continue;
            }
            classNameStr += `.${className[i]}`;
        }
        let idStr = "";
        if(id !== ""){
            idStr += `#${id}`;
        }
        if(classNameStr.length === 0 && idStr.length === 0){
            return defaultStr;
        }
        return `${id}${classNameStr}`;
    }
}