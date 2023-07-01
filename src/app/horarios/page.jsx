import Image from "next/image"

Image

export default function Horarios() {
  return (
    <div className="flex flex-col w-full">
    <h1 className="text-center text-5xl mb-8">Horarios</h1>
    <div className="flex justify-around items-top w-full gap-4 flex-col md:flex-row md:items-center">
      <div className="md:rounded-lg w-full md:w-1/2 overflow-hidden">
        <Image className="w-full h-auto" src="/img/Horario1.png" alt="" width={540} height={400} />
      </div>
      <div className="md:rounded-lg w-full md:w-1/2 overflow-hidden">
        <Image className="w-full h-auto" src="/img/Horario2.png" alt="" width={540} height={400} />
      </div>
    </div>
    </div>
  )
}
