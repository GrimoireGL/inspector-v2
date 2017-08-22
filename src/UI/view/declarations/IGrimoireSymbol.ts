interface IGrimoireSymbol{
    fqn:string;
    type:string;
}

export default IGrimoireSymbol;

export interface INodeDeclaration extends IGrimoireSymbol{
    defaultComponents:string[];
    extendsFrom:string|null;
}

export interface IComponentDeclaration extends IGrimoireSymbol{
    defaultAttributes:{
        converter:string;
        fqn:string;
    }[];
}

export interface IPluginDeclaration extends IGrimoireSymbol{

}