describe('Polymorphism', () => {

    class Employee{
         
        constructor(public name: string){
            
        }
    }

    class Manager extends Employee{

    }

    class VicePresident extends Manager{

    }

    function sayHello(employee: Employee){
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident;
            console.info(`Hello Vice President ${vp.name}`);
        }else if (employee instanceof Manager){
           const manager = employee as Manager;
           console.info(`Hello Manager ${manager.name}`);
        }else{
            console.info(`Hello employee ${employee.name}`);
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee("Rizal");
        console.info(employee);

        employee = new Manager("Iva");
        console.info(employee);

        employee = new VicePresident("Keyra");
        console.info(employee)
    })

    it('support params polymorphism', () => {
        sayHello(new Employee("rizal"));
        sayHello(new Manager("iva"));
        sayHello(new VicePresident("keyra"));
        // sayHello(new Employee("cuwah));
    })
})