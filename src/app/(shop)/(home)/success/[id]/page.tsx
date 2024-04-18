import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

export type SuccessPageProps = ComponentProps<'main'> & {
  params: {
    id: string
  }
}

export default function SuccessPage({ params, ...props }: SuccessPageProps) {
  console.log(params)
  return (
    <main
      className="mx-auto my-0 flex h-[656px] w-full max-w-[590px] flex-col items-center justify-evenly px-0 py-8"
      {...props}
    >
      <h1 className="text-[32px] font-bold text-title">Compra efetuada!</h1>

      <div className=" flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image
          src=""
          alt=""
          width={127}
          height={145}
          className="object-cover"
        />
      </div>

      <p className="text-center text-2xl font-normal">
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link
        href="/"
        className="text-xl font-bold text-principal duration-200 ease-in-out hover:text-light"
      >
        Voltar ao catálogo
      </Link>
    </main>
  )
}
