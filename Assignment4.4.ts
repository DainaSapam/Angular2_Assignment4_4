class TestGeneric<T>{
    setName: (T) => T;
    getName: () => T;
}

let obj1 = new TestGeneric<number>();
obj1.setName(1);
console.log(obj1.getName());

let obj2 = new TestGeneric<string>();
obj1.setName("Test");
console.log(obj1.getName());

let obj3 = new TestGeneric<boolean>();
obj1.setName(false);
console.log(obj1.getName());

interface IUser{
    name: string;
    setName(n: string);
    getName();
}

class User<T extends IUser>{
    name: string;
    setName(n: string) {
        this.name = n;
    }
    getName() {
        console.log(name);
    }
}

