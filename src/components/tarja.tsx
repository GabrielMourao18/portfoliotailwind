type TarjaProps = {
  children: React.ReactNode
}

function Tarja({ children }: TarjaProps) {
  return (
    <div className="text-white border border-white w-fit p-2 mt-2 rounded-md">
    <div className="w-fit rounded-md border border-white px-3 py-1.5 text-sm text-white sm:text-base"/>
      {children}
    </div>
  )
}

export default Tarja
