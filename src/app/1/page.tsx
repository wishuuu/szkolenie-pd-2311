'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Lesson1() {
  const router = useRouter();

  return(
      <>
      <div className='w-full h-[1200px] grid place-items-center'>
      <div className='text-white text-[64px]'>Clean Architecture</div>  
      </div>
      <div className="divider"/>
      <div className='w-full grid place-items-center'>
            <Image
              src="/ca_bob.png"
              alt="Clean Architecture"
              width={1200}
              height={900}
            />
      </div>
      <div className="divider"/>
      <div className='w-full h-[1200px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">Solution</pre>
          <pre data-prefix="">   Project</pre>
          <pre data-prefix="">   Project.Application</pre>
          <pre data-prefix="">   Project.Infrastructure</pre>
          <pre data-prefix="">   Project.Domain</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
            <Image
              src="/ca_proj.png"
              alt="Clean Architecture"
              width={1200}
              height={200}
            />
              <button className='btn btn-lg btn-success' onClick={() => {router.push('2')}}>
              GO NEXT
              </button>
      </div>


      </>
      );
}
