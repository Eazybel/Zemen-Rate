"use server"
export default async function FormData(_prevState:unknown,formData:FormData){
    const amount=formData.get("amount")
    return (
        {"data":amount}
    )
}