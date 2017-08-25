import { Store } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import UIConnectorProvider from "../../model/UIConnectorProvider";
import IGrimoireSymbol, { INodeDeclaration } from "../declarations/IGrimoireSymbol"
import IAnimationTimeline from "grimoirejs-animation/ref/Animation/Schema/IAnimationTimeline"
import IAlignedTimeline from "./IAlignedTimeline";
Vue.use(Vuex);

export function getId(attributeTimeline:IAnimationTimeline):string{
    return `${attributeTimeline.query}//${attributeTimeline.component}//${attributeTimeline.attribute}`;
}

const declarationStore = new Store({
    state: {
        symbols: [] as IGrimoireSymbol[],
        verticalSelectionTop: 0,
        verticalSelectionBottom: 0,
        attributeRects:{} as {[key:string]:{top:number,bottom:number}},
        currentTime: 150,
        animation: [
            {
                query: "@",
                component: "fundamental.Transform",
                attribute: "position",
                timeline: [0, 100, 200, 3000],
                values: [
                    [0, 0, 0],
                    [0, 10, 0],
                    [0, 0, 0],
                    [0, 10, 0]
                ]
            },
            {
                query: "@",
                component: "fundamental.Transform",
                attribute: "rotation",
                timeline: [0, 100, 200, 300],
                values: [
                    [0, 0, 0],
                    [0, 10, 0],
                    [0, 0, 0],
                    [0, 10, 0]
                ]
            }
        ] as IAnimationTimeline[],
        selectedAttribute: null as IAnimationTimeline|null
    },
    getters: {
        hasAnimationPlugin: state => state.symbols.filter(s => s.type === "plugin" && s.fqn.startsWith("grimoirejs-animation")).length > 0,
        selectedAttributeId: state => state.selectedAttribute? getId(state.selectedAttribute):null,
        currentTimeline: state => state.selectedAttribute ? state.selectedAttribute.timeline:null,
        alignedAnimation: state => {
            const result:IAlignedTimeline = {};
            for(let timeline of state.animation){
                if(result[timeline.query] === void 0){
                    result[timeline.query] = {};
                }
                if(result[timeline.query][timeline.component] === void 0){
                    result[timeline.query][timeline.component] = {};
                }
                    result[timeline.query][timeline.component][timeline.attribute] = timeline;
            }
            return result;
        },
        timelineByName:state=> {
            const result = {} as {[key:string]:any};
            for(let timeline of state.animation){
                result[getId(timeline)] = timeline.timeline;
            }
            return result;
        }
    },
    mutations: {
        setSymbols(state, item): void {
            state.symbols = item;
        },
        selectAttribute(state, args): void {
            state.selectedAttribute = args.attribute;
            state.verticalSelectionBottom = args.verticalSelectionBottom;
            state.verticalSelectionTop = args.verticalSelectionTop;
        },
        setAttributeRect(state,args):void{
            Vue.set(state.attributeRects,getId(args.attribute),{
                top:args.top,
                bottom:args.bottom
            });
        },
        setTime(state,args):void{
            state.currentTime = args.time;
        }
    }
});
export default declarationStore;
