$.confirm = function(options){
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            content: options.content,
            width: '400px',
            closable: false,
            footerButtons: [
                {
                    text: 'Нет', 
                    type: 'secondary', 
                    handler() {
                        modal.close()
                        reject()
                    }
                },
                {
                    text: 'Да', 
                    type: 'danger', 
                    handler() {
                        modal.close()
                        resolve()
                    }
                }
            ],
            onClose() {
                modal.destroy()
            }
        })

        setTimeout(() => modal.open(), 100) 
    })
}