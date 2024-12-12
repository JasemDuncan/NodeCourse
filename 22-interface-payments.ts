//PATRON REPOSITORIO
//Las clases estan desacopladas, se vuelve mas facil hacer el testing, y su mantenimiento.

//INICIO PATRON REPOSITORIO
interface PaymentCheckout {
    checkout(product: string, price: number): boolean 
}

interface PaymentCancel {
    cancel(): void
}
//FIN PATRON REPOSITORIO

class Payment01 implements PaymentCheckout, PaymentCancel{
    checkout(product: string, price: number): boolean {
        const randomNumber = Math.random()
        return randomNumber > 0.5
    }

    cancel(): void {
        throw new Error("Method not implemented.")
    }

}

class Payment02 implements PaymentCheckout, PaymentCancel{
    checkout(product: string, price: number): boolean {
        const randomNumber = Math.random()
        return randomNumber > 0.5
    }

    cancel(): void {
    throw new Error("Method not implemented.")
    }
}

class Payment03 implements PaymentCheckout{
    checkout(product: string, price: number): boolean {
        const randomNumber = Math.random()
        return randomNumber > 0.5
    }
}

type IPayment = PaymentCheckout & PaymentCancel
const payment01: IPayment = new Payment01()
if(!payment01.checkout("product",10)){
    const payment02: IPayment = new Payment02()
    if(!payment02.checkout("product",10)){
        const payment03: PaymentCheckout = new Payment03()
        payment03.checkout("product",10)
        console.log("Payment 03 executed")
    }else{
        console.log("Payment02 executed",10)
    }
} else {
    console.log("Paymen01 executed")
}