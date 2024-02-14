import HomeCard from "@/components/home-cardcomponents"

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <div className="mx-4 my-2 flex items-center justify-center">
          <h1 className="font-bold text-center">
            Atividade Prática 02 - Sistema de Doação de Sangue (CRUD)
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mx-2">
        <div className="my-4">
          <HomeCard section="Cidades" href="/cities" />
        </div>
        <div className="my-4">
          <HomeCard section="Estados" href="/states" />
        </div>
        <div className="my-4">
          <HomeCard section="Locais de Doação" href="/collectPlaces" />
        </div>
        <div className="my-4">
          <HomeCard section="Tipos Sanguíneos" href="/bloodTypes" />
        </div>
        <div className="my-4">
          <HomeCard section="Doações" href="/donations" />
        </div>
        <div className="my-4">
          <HomeCard section="Doadores" href="/persons" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-center font-bold">
          Filipe Augusto Santos de Moura - 20.2.8079
        </h1>
      </div>
    </>
  )
}
