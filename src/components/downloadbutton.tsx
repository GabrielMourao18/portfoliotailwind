type DownloadButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

function DownloadButton({ children, onClick, className = "" }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        w-fit
        px-3 py-2
        bg-white
        text-black
        border border-black/20
        rounded-2xl
        hover:bg-zinc-100
        transition
        cursor-pointer
        ${className}
      `}
    >
      {/* Ícone de download */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>

      <span>{children}</span>
    </button>
  )
}

export default DownloadButton
