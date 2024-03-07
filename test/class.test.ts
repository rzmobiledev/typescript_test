describe('Class', () => {

    
    class Customer {
        
        readonly id: number;
        name: string;
        age?: number;

            constructor(id: number, name: string){
                this.id = id;
                this.name = name;
            }
        }

        class Order{

        }

    it('should can create class', () => {
        
        const customer: Customer = new Customer(1, 'Rizal');
        customer.age = 20;
    })



})