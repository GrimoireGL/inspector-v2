interface IGrimoireSymbol{
    fqn:string;
    type:string;
}

export default IGrimoireSymbol;

export interface INodeDeclaration extends IGrimoireSymbol{
    defaultComponents:string[];
    extendsFrom:string|null;
}