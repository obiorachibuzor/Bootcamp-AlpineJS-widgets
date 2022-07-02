document.addEventListener('alpine:init', () => {

    Alpine.data('yearsAgoWidget', function(){
        return {
            newDate: '',
            message: '',
            calculate() {
                this.message = yearsAgo(this.newDate);

                setTimeout(() => {
                    this.message = '';
                }, 2000);
            }
     
        }
    });
})
