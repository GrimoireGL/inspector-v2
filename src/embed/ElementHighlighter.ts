export default class ElementHighlighter {
    private _higlightElement: HTMLDivElement;

    constructor() {
        this._higlightElement = document.createElement("div");
        this._higlightElement.style.opacity = "0.1";
        this._higlightElement.style.backgroundColor = "red";
        this._higlightElement.style.position = "absolute";
        this._higlightElement.style.left = "0px";
        this._higlightElement.style.right = "0px";
        this._higlightElement.style.top = "0px";
        this._higlightElement.style.bottom = "0px";
        this._higlightElement.style.zIndex = "1000000000";
    }

    public highlight(query: string | HTMLElement): void {
        if (typeof query === "string") {
            const queried = document.querySelectorAll(query);
            if (queried.length > 0) {
                queried.item(0).appendChild(this._higlightElement);
            }
        }else{
            query.appendChild(this._higlightElement);
        }
    }

    public disable(): void {
        this._higlightElement.remove();
    }
}