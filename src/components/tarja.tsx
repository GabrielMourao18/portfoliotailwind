type TarjaProps = {
  children: React.ReactNode
}

function Tarja({ children }: TarjaProps) {
  return (
    <div className="text-white border border-white w-fit p-2 mt-2 rounded-md">
      {children}
    </div>
  )
}

export default Tarja