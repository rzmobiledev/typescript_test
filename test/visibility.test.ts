describe('Visibility', () => {

    class Counter{
        protected counter: number = 0;

        increment(): void{
            this.counter++;
        }

        getCounter(): number{
            return this.counter;
        }
    }

    class doubleCounter extends Counter{

        increment(): void {
            this.counter +=2;
        }
    }

    it('should support private', () => {
        const counter = new doubleCounter();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    })
})