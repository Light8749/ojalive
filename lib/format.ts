export function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

// 1243 -> "1.2k", 640 -> "640"
export function formatViewers(count: number) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(".0", "") + "k";
  }
  return count.toString();
}
