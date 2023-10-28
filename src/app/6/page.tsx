'use client'
import { useRouter } from "next/navigation";


export default function Lesson4() {

  const router = useRouter();

  return(
    <>
      <div className='w-full h-[200px] text-[48px] pl-16 pt-12'>
        <div className={'inline text-sky-400'}>Ov</div>Soft
      </div>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Zadanie praktyczne - Addon SAP</div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div>
          <button className='btn btn-lg btn-error' onClick={() => {router.push('5')}}>
            GO BACK
          </button>
        </div>
      </div>
    </>)
}
