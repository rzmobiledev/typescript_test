describe('Visibility', () => {

    class Person{
        
        constructor(public name: string){
            this.name = name;
        }
    }


    it('should work', () => {
        const person = new Person('Rizal');
        console.info(person.name);

        person.name = 'Iva';
        console.info(person.name);
    })
});