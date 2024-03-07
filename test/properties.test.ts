describe('Properties', () => {

    class Customer {
        readonly id: number;
        name: string = "";
        age?: number;

        constructor(id: number, name: string){
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it('should have properties', () => {
        
        const customer = new Customer(1, 'Jhone');
        customer.age = 20;

        console.info(customer);

    })

    it('should have methods', () => {
        const customer = new Customer(1, "Rizal Safril");
        customer.sayHello("Keyra Almira");
    })
})