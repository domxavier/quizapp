export class Question {
    constructor(
        public correct_answer : string,
        public name : string, 
        public options : option[] = []
    ) {}
}

export class option {
    constructor(
        public qid : number,
        public value : string,
        public answer : boolean
    ) {}
    
}