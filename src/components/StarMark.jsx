// Six-pointed star from the Chicago flag. The shop has a flag hanging over its stations.
export default function StarMark({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 2 21 17.5H3Z M12 22 3 6.5H21Z" />
    </svg>
  )
}
