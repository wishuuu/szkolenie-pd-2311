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
        <div className='text-white text-[64px]'>AutoMapper</div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center text-[32px] text-center'>
        AutoMapper - wstrzykiwanie zależności.

        Biblioteka ułatwiająca mapowanie podobnych do siebie klas w kodzie.
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">public class A</pre>
          <pre data-prefix="">&#123;</pre>
          <pre data-prefix="">   public int Variable1 &#123; get; set; &#125;</pre>
          <pre data-prefix="">&#125;</pre>
        </div>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">public class B</pre>
          <pre data-prefix="">&#123;</pre>
          <pre data-prefix="">   public int Variable1 &#123; get; set; &#125;</pre>
          <pre data-prefix="">&#125;</pre>
        </div>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">A a = new A();</pre>
          <pre data-prefix="">B b = mapper.Map&lt;A&gt;(a)</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">public class B</pre>
          <pre data-prefix="">&#123;</pre>
          <pre data-prefix="">   public int Variable<div className={'inline text-red-500'}>2</div> &#123; get; set; &#125;</pre>
          <pre data-prefix="">&#125;</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div>
          <button className='btn btn-lg btn-error mr-12' onClick={() => {router.push('3')}}>
            GO BACK
          </button>
          <button className='btn btn-lg btn-success' onClick={() => {router.push('5')}}>
            GO NEXT
          </button>
        </div>
      </div>
    </>)
}
