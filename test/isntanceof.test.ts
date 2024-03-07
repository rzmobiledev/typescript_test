describe('Visibility', () => {

    it('should have problem with typeof', () => {

        class Employe{}
        class Manager{}

        const budi = new Employe();
        const rizal = new Employe();

        expect(budi instanceof Employe).toBe(true);
        expect(rizal instanceof Employe).toBe(true);
    })

})