const patternSvg = encodeURIComponent(
  `<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='1'><path d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/></g></g></svg>`,
)

export function PageBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{ backgroundImage: `url("data:image/svg+xml,${patternSvg}")` }}
      />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-1/3 top-20 h-[420px] w-[420px] rounded-full bg-amber-500/12 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-32 h-[380px] w-[380px] rounded-full bg-orange-600/10 blur-[90px]" />
      </div>
    </>
  )
}
