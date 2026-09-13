"use server"

import { FormStatusPending } from "react-dom";

export default async function FormData(_prevState:unknown,formData:FormData){
    const amount=formData.get("amount")
    console.log(amount)
    return (
        {"data":"FormData"}
    )
}