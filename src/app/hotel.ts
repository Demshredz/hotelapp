export class Hotel {
    constructor(
        public id: number,
        public name: string,
        public stars: number,
        public starImg: string,
        public image: string,
        public category: string,
        public price: number,
        public checked: boolean,
        public breakfast: number,
        public singleroom: number,
    ) {}
}
