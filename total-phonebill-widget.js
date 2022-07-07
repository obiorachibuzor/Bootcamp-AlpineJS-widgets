document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget', function(){
        return {
            items : '',
            totalCost :'0.00',
            billMessage : '',
            billDue(){
                this.billMessage = totalPhoneBill(this.items);

                setTimeout (() => {
                    this.billMessage = '';
                },3000)
            },
        }
    });
})
