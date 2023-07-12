export const PokemonsListSkeleton = () => {
  return new Array(12)
    .fill(null)
    .map((_, index) => (
      <div
        className="bg-gray-200 animate-pulse relative mt-16 h-[150px] flex gap-2 flex-col items-center justify-center shadow-lg rounded-3xl border"
        key={index}
      ></div>
    ))
}
