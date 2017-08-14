export default class IDGenerator{
    public static generate():string{
        return Math.random().toString(36).slice(-6);
    }
}