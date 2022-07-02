document.addEventListener('alpine:init', () => {

    Alpine.data('transportFeeWidget', function(){
        return {
            shift: '',
            message: '',
            transport() {
                const transportMessage = transportFee(this.shift);
                this.message = transportMessage;

                setTimeout(() => {
                    this.message = '';
                }, 2000);

            }
        }
    });
})
