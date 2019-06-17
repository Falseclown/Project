class Isfile{
    constructor(files,options){
        this.size  = files.size;
        this.type = files.type.match(/\/(\w+)$/i)[1];
        this.options = options;
    }
    isType(){
        let {type} = this.options;
        return type.includes(this.type);
    }
    isSize(){
        let {size} = this.options;
        return (size*1024*1024)>this.size
    }
    
}
export default Isfile