import IAnimationTimeline from "grimoirejs-animation/ref/Animation/Schema/IAnimationTimeline";

export interface IAlignedTimelineByAttribute{
    [attributeName:string]:IAnimationTimeline;
}

export interface IAlignedTimelineByQuery{
    [componentFQN:string]:IAlignedTimelineByAttribute;
}

interface IAlignedTimeline{
    [query:string]:IAlignedTimelineByQuery;
}

export default IAlignedTimeline;