interface Bird {
    fly(): void;
    walk(): void;
    swim(): void;
}

class Parrot implements Bird {
    fly() { };
    walk() { };
    swim() { };
}

class Penguin implements Bird {
    fly() {
        throw new Error('Penguin cannot fly')
    }
    walk() { }
    swim() { }
}


const penguin = new Penguin();
penguin.fly() // This will throw the error 


// fix
interface IBird { }

interface FlyingBird extends IBird {
    fly(): void
}

interface SwimmingBird extends IBird {
    swim(): void
}

interface WalkingBird extends IBird {
    walk(): void
}

class Parrot1 implements WalkingBird, FlyingBird {
    fly() { }
    walk() { }
}

class Penguin1 implements WalkingBird, SwimmingBird {
    walk() { }
    swim() { }
}

