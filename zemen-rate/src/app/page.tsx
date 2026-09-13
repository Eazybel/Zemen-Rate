"use client";

import { useActionState, useEffect } from "react";
import FormDataHandler from "@/app/api/formData";
import Display from "@/app/components/display";

const CURRENCY_OPTIONS = [
  ["AED", "UAE Dirham"], ["AFN", "Afghan Afghani"], ["ALL", "Albanian Lek"], ["AMD", "Armenian Dram"],
  ["ANG", "Netherlands Antillian Guilder"], ["AOA", "Angolan Kwanza"], ["ARS", "Argentine Peso"], ["AUD", "Australian Dollar"],
  ["AWG", "Aruban Florin"], ["AZN", "Azerbaijani Manat"], ["BAM", "Bosnia Convertible Mark"], ["BBD", "Barbados Dollar"],
  ["BDT", "Bangladeshi Taka"], ["BGN", "Bulgarian Lev"], ["BHD", "Bahraini Dinar"], ["BIF", "Burundian Franc"],
  ["BMD", "Bermudian Dollar"], ["BND", "Brunei Dollar"], ["BOB", "Bolivian Boliviano"], ["BRL", "Brazilian Real"],
  ["BSD", "Bahamian Dollar"], ["BTN", "Bhutanese Ngultrum"], ["BWP", "Botswana Pula"], ["BYN", "Belarusian Ruble"],
  ["BZD", "Belize Dollar"], ["CAD", "Canadian Dollar"], ["CDF", "Congolese Franc"], ["CHF", "Swiss Franc"],
  ["CLF", "Chilean Unidad de Fomento"], ["CLP", "Chilean Peso"], ["CNH", "Offshore Chinese Renminbi"], ["CNY", "Chinese Renminbi"],
  ["COP", "Colombian Peso"], ["CRC", "Costa Rican Colon"], ["CUP", "Cuban Peso"], ["CVE", "Cape Verdean Escudo"],
  ["CZK", "Czech Koruna"], ["DJF", "Djiboutian Franc"], ["DKK", "Danish Krone"], ["DOP", "Dominican Peso"],
  ["DZD", "Algerian Dinar"], ["EGP", "Egyptian Pound"], ["ERN", "Eritrean Nakfa"], ["ETB", "Ethiopian Birr"],
  ["EUR", "Euro"], ["FJD", "Fiji Dollar"], ["FKP", "Falkland Islands Pound"], ["FOK", "Faroese Króna"],
  ["GBP", "Pound Sterling"], ["GEL", "Georgian Lari"], ["GGP", "Guernsey Pound"], ["GHS", "Ghanaian Cedi"],
  ["GIP", "Gibraltar Pound"], ["GMD", "Gambian Dalasi"], ["GNF", "Guinean Franc"], ["GTQ", "Guatemalan Quetzal"],
  ["GYD", "Guyanese Dollar"], ["HKD", "Hong Kong Dollar"], ["HNL", "Honduran Lempira"], ["HRK", "Croatian Kuna"],
  ["HTG", "Haitian Gourde"], ["HUF", "Hungarian Forint"], ["IDR", "Indonesian Rupiah"], ["ILS", "Israeli New Shekel"],
  ["IMP", "Manx Pound"], ["INR", "Indian Rupee"], ["IQD", "Iraqi Dinar"], ["IRR", "Iranian Rial"],
  ["ISK", "Icelandic Króna"], ["JEP", "Jersey Pound"], ["JMD", "Jamaican Dollar"], ["JOD", "Jordanian Dinar"],
  ["JPY", "Japanese Yen"], ["KES", "Kenyan Shilling"], ["KGS", "Kyrgyzstani Som"], ["KHR", "Cambodian Riel"],
  ["KID", "Kiribati Dollar"], ["KMF", "Comorian Franc"], ["KRW", "South Korean Won"], ["KWD", "Kuwaiti Dinar"],
  ["KYD", "Cayman Islands Dollar"], ["KZT", "Kazakhstani Tenge"], ["LAK", "Lao Kip"], ["LBP", "Lebanese Pound"],
  ["LKR", "Sri Lanka Rupee"], ["LRD", "Liberian Dollar"], ["LSL", "Lesotho Loti"], ["LYD", "Libyan Dinar"],
  ["MAD", "Moroccan Dirham"], ["MDL", "Moldovan Leu"], ["MGA", "Malagasy Ariary"], ["MKD", "Macedonian Denar"],
  ["MMK", "Burmese Kyat"], ["MNT", "Mongolian Tögrög"], ["MOP", "Macanese Pataca"], ["MRU", "Mauritanian Ouguiya"],
  ["MUR", "Mauritian Rupee"], ["MVR", "Maldivian Rufiyaa"], ["MWK", "Malawian Kwacha"], ["MXN", "Mexican Peso"],
  ["MYR", "Malaysian Ringgit"], ["MZN", "Mozambican Metical"], ["NAD", "Namibian Dollar"], ["NGN", "Nigerian Naira"],
  ["NIO", "Nicaraguan Córdoba"], ["NOK", "Norwegian Krone"], ["NPR", "Nepalese Rupee"], ["NZD", "New Zealand Dollar"],
  ["OMR", "Omani Rial"], ["PAB", "Panamanian Balboa"], ["PEN", "Peruvian Sol"], ["PGK", "Papua New Guinean Kina"],
  ["PHP", "Philippine Peso"], ["PKR", "Pakistani Rupee"], ["PLN", "Polish Złoty"], ["PYG", "Paraguayan Guaraní"],
  ["QAR", "Qatari Riyal"], ["RON", "Romanian Leu"], ["RSD", "Serbian Dinar"], ["RUB", "Russian Ruble"],
  ["RWF", "Rwandan Franc"], ["SAR", "Saudi Riyal"], ["SBD", "Solomon Islands Dollar"], ["SCR", "Seychellois Rupee"],
  ["SDG", "Sudanese Pound"], ["SEK", "Swedish Krona"], ["SGD", "Singapore Dollar"], ["SHP", "Saint Helena Pound"],
  ["SLE", "Sierra Leonean Leone"], ["SLL", "Sierra Leonean Leone"], ["SOS", "Somali Shilling"], ["SRD", "Surinamese Dollar"],
  ["SSP", "South Sudanese Pound"], ["STN", "São Tomé Dobra"], ["SYP", "Syrian Pound"], ["SZL", "Eswatini Lilangeni"],
  ["THB", "Thai Baht"], ["TJS", "Tajikistani Somoni"], ["TMT", "Turkmenistan Manat"], ["TND", "Tunisian Dinar"],
  ["TOP", "Tongan Paʻanga"], ["TRY", "Turkish Lira"], ["TTD", "Trinidad Dollar"], ["TVD", "Tuvaluan Dollar"],
  ["TWD", "New Taiwan Dollar"], ["TZS", "Tanzanian Shilling"], ["UAH", "Ukrainian Hryvnia"], ["UGX", "Ugandan Shilling"],
  ["USD", "United States Dollar"], ["UYU", "Uruguayan Peso"], ["UZS", "Uzbekistani Som"], ["VES", "Venezuelan Bolívar"],
  ["VND", "Vietnamese Đồng"], ["VUV", "Vanuatu Vatu"], ["WST", "Samoan Tālā"], ["XAF", "Central African CFA Franc"],
  ["XCD", "East Caribbean Dollar"], ["XCG", "Caribbean Guilder"], ["XDR", "Special Drawing Rights"], ["XOF", "West African CFA"],
  ["XPF", "CFP Franc"], ["YER", "Yemeni Rial"], ["ZAR", "South African Rand"], ["ZMW", "Zambian Kwacha"],
  ["ZWG", "Zimbabwean Dollar"], ["ZWL", "Zimbabwean Dollar"]
] ;

export default function Home() {
  const [state, formAction, pending] = useActionState(FormDataHandler, undefined);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-stone-400">Utility</span>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900 mt-0.5">Currency Exchange</h1>
          <p className="text-sm text-stone-500 mt-1">Real-time conversions crafted for quick checks.</p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-xs font-medium text-stone-600 mb-1.5">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              defaultValue="1"
              placeholder="0.00"
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="currencyFrom" className="block text-xs font-medium text-stone-600 mb-1.5">
                Currency you having
              </label>
              <select
                name="currencyFrom"
                id="currencyFrom"
                className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all cursor-pointer"
              >
                {CURRENCY_OPTIONS.map(([code, name]) => (
                  <option key={`from-${code}`} value={code}>
                    {code} — {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="currencyTo" className="block text-xs font-medium text-stone-600 mb-1.5">
                To
              </label>
              <select
                name="currencyTo"
                id="currencyTo"
                className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all cursor-pointer"
              >
                {CURRENCY_OPTIONS.map(([code, name]) => (
                  <option key={`to-${code}`} value={code}>
                    {code} — {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full mt-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.99]"
          >
            {pending ? "Calculating..." : "Convert currency"}
          </button>
        </form>

        {state && (
          <div className="pt-4 border-t border-stone-100">
            <Display data={state} />
          </div>
        )}
      </div>
    </div>
  );
}