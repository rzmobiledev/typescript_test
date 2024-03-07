describe('Support inheritance', () => {

    class Employee{
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class Manager extends Employee{

    }

    class Director extends Manager{

    }

    it('should support', () => {

        const employee = new Employee("Rizal");
        console.info(employee.name);

        const manager = new Manager("Iva");
        console.info(manager.name);

        const director = new Director("Keyra");
        console.info(director.name);
    });
});