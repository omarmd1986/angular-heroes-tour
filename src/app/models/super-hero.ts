export class SuperHero {
    
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ){}
}

export const Powers: string[] = [
    'Smart', 'Flexible','Hot','Changer', 'Rich'
];