import IGrimoireSymbol, { INodeDeclaration, IComponentInheritence, IPluginDeclaration } from "./IGrimoireSymbol";

export class DeclarationFilter {
    constructor(public symbols: IGrimoireSymbol[]) {

    }
    /**
     * Get all default component considering inheritence
     * @param symbols 
     * @param targetNode 
     */
    public getComponentInheritenceByNode(targetNode: INodeDeclaration): IComponentInheritence[] {
        const items = [] as IComponentInheritence[];
        let current = targetNode.extendsFrom;
        while (current) {
            const currentInstance = this.getByFQN<INodeDeclaration>(current)!;
            currentInstance.defaultComponents.forEach(f => items.push({ fqn: f, by: currentInstance.fqn }));
            current = currentInstance.extendsFrom;
        }
        return items;
    }

    public getPackageNameFromSymbol(symbol: IGrimoireSymbol): IPluginDeclaration|null {
        if (symbol.type === "plugin") {
            throw new Error("Invalid argument. symbol must not be plugin");
        } else {
            const packageNamespace = symbol.fqn.split(".")[0];
            const fqnBeginWith = packageNamespace === "grimoirejs" ? "grimoirejs" : `grimoirejs-${packageNamespace}`
            for (let i = 0; i < this.symbols.length; i++) {
                const symbol = this.symbols[i];
                if (symbol.fqn.startsWith(fqnBeginWith)) {
                    return symbol as IPluginDeclaration;
                }
            }
            return null;
        }
    }

    public getByFQN<T extends IGrimoireSymbol>(fqn: string): T | null {
        for (let i = 0; i < this.symbols.length; i++) {
            const symbol = this.symbols[i];
            if (symbol.fqn === fqn) {
                return symbol as T;
            }
        }
        return null;
    }
    
}