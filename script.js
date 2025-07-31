// Grab dropdown elements
const fromCurrency = document.getElementById('fromCurrency');
const display = document.getElementById('display');
const start = document.getElementById('start');
const much = document.getElementById('much');
const end = document.getElementById('end');
const amount = document.getElementById('amount');
const toCurrency = document.getElementById('toCurrency');
const convertButton = document.getElementById('convertButton');
const convertedValue = document.getElementById('convertedValue');
const dateInput = document.getElementById('dateInput');
const body=document.querySelector("body")
const main=document.querySelector("main")
const spinner=document.getElementById("spinner")
const usdgbp = document.getElementById('usdgbp');
const gbpjpy = document.getElementById('gbpjpy');
const usdcny = document.getElementById('usdcny');
const usdeur = document.getElementById('usdeur');
const eurgbp = document.getElementById('eurgbp');

const usdetb = document.getElementById('usdetb');
const euretb = document.getElementById('euretb');
const gbpetb = document.getElementById('gbpetb');
const saretb = document.getElementById('saretb');
const aedetb = document.getElementById('aedetb');
let today=new Date()
year=today.getFullYear()
month=String(today.getMonth()+1).padStart(2,"0")
day=String(today.getDate()).padStart(2,"0")
let date=year+"-"+month+"-"+day
if (!amount.value) {
	amount.value=1
}
if (!dateInput.value) {
	dateInput.value=date
}
async function etb(){
	main.style.display="none"
	spinner.classList.remove("hidden")
try {
	const res1=await fetch(`https://api.fxratesapi.com/convert?from=USD&to=ETB&date=${date}&amount=1&format=json`)
const res2=await fetch(`https://api.fxratesapi.com/convert?from=GBP&to=ETB&date=${date}&amount=1&format=json`)
const res3=await fetch(`https://api.fxratesapi.com/convert?from=EUR&to=ETB&date=${date}&amount=1&format=json`)
const res4=await fetch(`https://api.fxratesapi.com/convert?from=SAR&to=ETB&date=${date}&amount=1&format=json`)
const res5=await fetch(`https://api.fxratesapi.com/convert?from=AED&to=ETB&date=${date}&amount=1&format=json`)
const data1=await res1.json()
const data2=await res2.json()
const data3=await res3.json()
const data4=await res4.json()
const data5=await res5.json()
usdetb.innerText="≈ "+data1.result.toFixed(2)
euretb.innerText="≈ "+data2.result.toFixed(2)
gbpetb.innerText="≈ "+data3.result.toFixed(2)
saretb.innerText="≈ "+data4.result.toFixed(2)
aedetb.innerText="≈ "+data5.result.toFixed(2)
} catch (error) {
	alert("Something went wrong please try again")
}
main.style.display="block"
	spinner.classList.add("hidden")
}
async function others(){
	main.style.display="none"
	spinner.classList.remove("hidden")
try {
	const res1=await fetch(`https://api.fxratesapi.com/convert?from=USD&to=GBP&date=${date}&amount=1&format=json`)
const res2=await fetch(`https://api.fxratesapi.com/convert?from=GBP&to=JPY&date=${date}&amount=1&format=json`)
const res3=await fetch(`https://api.fxratesapi.com/convert?from=USD&to=CNY&date=${date}&amount=1&format=json`)
const res4=await fetch(`https://api.fxratesapi.com/convert?from=USD&to=EUR&date=${date}&amount=1&format=json`)
const res5=await fetch(`https://api.fxratesapi.com/convert?from=EUR&to=GBP&date=${date}&amount=1&format=json`)
const data1=await res1.json()
const data2=await res2.json()
const data3=await res3.json()
const data4=await res4.json()
const data5=await res5.json()
usdgbp.innerText="≈ "+data1.result.toFixed(2)
gbpjpy.innerText="≈ "+data2.result.toFixed(2)
usdcny.innerText="≈ "+data3.result.toFixed(2)
usdeur.innerText="≈ "+data4.result.toFixed(2)
eurgbp.innerText="≈ "+data5.result.toFixed(2)
} catch (error) {
	alert("Something went wrong please try again later")
}
main.style.display="block"
spinner.classList.add("hidden")
}
etb()
others()
convertButton.onclick=async ()=>{
	main.style.display="none"
	spinner.classList.remove("hidden")
	try {
	const res=await fetch(`https://api.fxratesapi.com/convert?from=${fromCurrency.value.toUpperCase()}&to=${toCurrency.value.toUpperCase()}&date=${dateInput.value}&amount=${amount.value}&format=json`)
	const data= await res.json()
	start.innerText=fromCurrency.value.toUpperCase()
	end.innerText=" "+toCurrency.value.toUpperCase()
	much.innerText=amount.value+" "
	convertedValue.innerText="≈ "+data.result.toFixed(2)
	display.setAttribute("class","block")
	main.style.display="block"
	spinner.classList.add("hidden")
	} catch (error) {
	console.log(error)
	}
}