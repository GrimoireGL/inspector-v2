interface IMessage{
    $messageType:string;
    $source:string;
    $fromBackend?:boolean;
}

export default IMessage;