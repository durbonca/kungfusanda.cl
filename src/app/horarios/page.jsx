import Image from "next/image"

Image

export default function Horarios() {
  return (
    <div className="flex flex-col w-full my-4">
    <h1 className="text-center text-5xl mb-8">Horarios</h1>
    <div className="flex flex-wrap justify-around items-top w-full gap-4 flex-col md:flex-row md:items-center">
      <div className="md:rounded-lg w-full md:w-2/3 overflow-hidden">
        <Image className="w-full h-auto" src="/img/horario1.jpg" alt="horario 1" width={1131} height={1600} />
      </div>
      <div className="md:rounded-lg w-full md:w-2/3 overflow-hidden">
        <Image className="w-full h-auto" src="/img/horario2.jpg" alt="" width={720} height={892} />
      </div>
      <div className="md:rounded-lg w-full md:w-2/3 overflow-hidden">
        <Image className="w-full h-auto" src="/img/horario3.jpg" alt="" width={1131} height={1600} />
      </div>
    </div>
    </div>
  )
}
