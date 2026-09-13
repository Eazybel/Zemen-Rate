 interface ConversionResponse {
  result?: string;
  conversion_result?: number;
  conversion_rate?: number;
  base_code?: string;
  target_code?: string;
}

interface DataProp {
  data: ConversionResponse | number;
}

export default function Display({ data }: DataProp) {
  const isObject = typeof data === "object" && data !== null;
  const convertedValue = isObject ? data?.conversion_result : data;
  const rate = isObject ? data?.conversion_rate : null;
  const baseCode = isObject ? data?.base_code : "";
  const targetCode = isObject ? data?.target_code : "";

  if (isObject && data?.result === "error") {
    return (
      <div className="rounded-xl bg-red-50 border border-red-200/80 p-4 text-xs text-red-600 font-medium">
        Could not complete conversion. Verify API configuration.
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-stone-50/80 border border-stone-200/80 p-4 sm:p-5 space-y-3 transition-all">
      <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
        <span className="tracking-wide uppercase text-[11px]">Converted Output</span>
        {rate && (
          <span className="font-mono text-[11px] bg-stone-200/60 text-stone-700 px-2 py-0.5 rounded-md">
            1 {baseCode} = {Number(rate).toFixed(4)} {targetCode}
          </span>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <span className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-mono truncate">
          {typeof convertedValue === "number"
            ? convertedValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
              })
            : String(convertedValue ?? "—")}
        </span>
        {targetCode && (
          <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider shrink-0">
            {targetCode}
          </span>
        )}
      </div>
    </div>
  );
}