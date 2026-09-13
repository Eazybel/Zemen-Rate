"use client"
import Image from "next/image";
import {useActionState,useRef,useEffect} from "react"
import FormData from "@/app/api/formData"
export default function Home() {
  const formRef=useRef<HTMLFormElement>(null)
  const [state,formAction,pending]=useActionState(FormData,undefined)
useEffect(()=>{
console.log(state)
},[state])


  return (
    <div>
      <form action={formAction} ref={formRef} method="get">
        <input type="number" name="amount" id="amount" placeholder="Pleaase Enter The amount"/>
        <select name="currencyFrom" id="currencyFrom">
          <option value="none" disabled>Currency From</option>
          <option value="USD">USD</option>
        </select>
        <select name="currencyTo" id="currencyTo">
          <option value="nonr" disabled>Select currency To</option>
          <option value="GBP">GBP</option>
        </select>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}
