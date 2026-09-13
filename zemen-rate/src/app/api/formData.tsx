"use server"
export default async function FormData(_prevState:unknown,formData:FormData){
    const amount=formData.get("amount")
    const currencyFrom=formData.get("currencyFrom")
    const currencyTo=formData.get("currencyTo")
    console.log(amount,currencyFrom,currencyTo)

        const res=await fetch(`https://v6.exchangerate-api.com/v6/fbae774efc584d949c6dd985/pair/${currencyFrom}/${currencyTo}/${amount}`)
            const data=await res.json()
            return (
                data.conversion_result
            )
}