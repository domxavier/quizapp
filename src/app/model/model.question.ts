export class Question {
    constructor(
        public qid : number,
        public name : string, 
        public options : option[] = []
    ) {}
}

class option {
    constructor(
        public qid : number,
        public value : string,
        public answer : boolean
    ) {}
    
}