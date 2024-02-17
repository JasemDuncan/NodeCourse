interface Payment {
    checkout(product: string, price: number): boolean
}

interface PaymentNotCancelled {
    cancel():void 
}



class Payment01 implements Payment {



    checkout(product: string,price: number): boolean {
        const randomNumber = Math.random()

        return randomNumber > .5 
    }
}



class Payment02 implements PaymentCheckout & paymentCancel {

    cancel(): void {
        console.log("pauyment checkout")
    }
    checkout(product: string,price: number): boolean {
        const randomNumber = Math.random()

        return randomNumber > .5 
    }
}

class Payment03 implements PaymentCheckout {
    checkout(product: string,price: number): boolean {
        const randomNumber = Math.random()

        return randomNumber > .5 
    }
}

type Payment = PaymentCheckout & PaymentCancel

const payment01: Payment = new Payment01()
if(payment01.checkout("product", 10)){
    const payment02: Payment = new Payment02()
    if(!payment01.checkout("product",10)){
        const payment03: PaymentNotCancelled = new Payment03()
        payment03.checkout("product", 10)
    }else {
        console.log("Payment02 executed")
    }
}else {
    console.log("Payment01 executed")
}