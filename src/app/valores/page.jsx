import Image from 'next/image'

const Valores = () => {
  return (
    <div className="flex flex-col w-full mt-4">
    <h1 className="text-center text-5xl mb-8">Valores</h1>
    <p className='text-center mb-4'>
        ELIGE TU PLAN, EL CAMBIO EMPIEZA HOY ¡¡¡ <br />
        PUEDES SOLICITAR TU CLASE DE REGALO AL <br /><a className='text-green-500 visited:text-green-500' href="https://wa.me/56951787063" target="_blank" rel="noreferrer">WHATSAPP, Click Acá</a>
    </p>
    <div className="flex justify-around items-top w-full gap-4 flex-col md:flex-row md:items-center">
      <div className="md:rounded-lg w-full md:w-1/2 overflow-hidden">
        <Image className="w-full h-auto" src="/img/valores/Pago1.jpg" alt="valores" width={540} height={400} />
      </div>
      <div className="md:rounded-lg w-full md:w-1/2 overflow-hidden">
        <Image className="w-full h-auto" src="/img/valores/Pago2.jpg" alt="valores" width={540} height={400} />
      </div>
    </div>
    <div className="flex justify-around items-top w-full gap-4 flex-col md:flex-row md:items-center">
      <div className="md:rounded-lg w-full md:w-1/2 overflow-hidden">
        <Image className="w-full h-auto" src="/img/valores/Pago3.jpg" alt="valores" width={540} height={400} />
      </div>
      <div className="md:rounded-lg w-full md:w-1/2 overflow-hidden">
        <Image className="w-full h-auto" src="/img/valores/Pago4.jpg" alt="valores" width={540} height={400} />
      </div>
    </div>
    </div>
  )
}

export default Valores