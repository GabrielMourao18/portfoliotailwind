
import Tarja from "../../../../../components/tarja"
import DownloadButton from "../../../../../components/downloadbutton"

function Hero() {
  return (
      <>
        <div>
          <section className="w-full bg-app-gradient">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-screen">
                
                {/* Texto */}
                <div>
                  <h2 className="text-3xl text-white">Olá, me chamo</h2>
                  <h1 className="text-4xl lg:text-8xl font-bold text-white">
                    Gabriel <br /> Mourão
                  </h1>
                  <div className="flex gap-2">
                    <Tarja>UI/UX Designer</Tarja>
                    <Tarja>Ilustrador</Tarja>
                  </div>
                  <div className="mt-2 ">
                    <DownloadButton>Baixar currículo</DownloadButton>
                  </div>


                </div>

                {/* Imagem */}
                <div className="flex justify-center lg:justify-end">
                  <img
                    src=""
                    alt="Ilustração do Gabriel"
                    className="w-full max-w-sm lg:max-w-md"
                  />
                </div>

              </div>
            </div>
          </section>
        </div>
      </>
  )
}

export default Hero
