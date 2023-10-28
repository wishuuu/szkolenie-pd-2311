'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Lesson1() {
  const router = useRouter();

  return(
    <>
      <div className='w-full h-[200px] text-[48px] pl-16 pt-12'>
        <div className={'inline text-sky-400'}>Ov</div>Soft
      </div>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Clean Architecture</div>  
      </div>
      <div className="divider"/>
      <div className='w-full grid place-items-center'>
        <Image
          src="/1/ca_bob.png"
          alt="Clean Architecture"
          width={1200}
          height={900}
        />
      </div>
      <div className="divider"/>
      <div className='w-full h-[1200px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">Solution</pre>
          <pre data-prefix="">   Project.Main             // Console</pre>
          <pre data-prefix="">   Project.Application      // Class</pre>
          <pre data-prefix="">   Project.Infrastructure   // Class</pre>
          <pre data-prefix="">   Project.Domain           // Class</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[1000px] grid place-items-center'>
        <Image
          src="/1/ca_proj.png"
          alt="Clean Architecture"
          width={1200}
          height={200}
        />
      </div>
      <div className="divider"/>
      <div className='w-full h-[1000px] grid place-items-center'>
        <div className='text-white text-[64px]'>Zadanie praktyczne - Statusy dokumentow</div>  
        <div className='text-white text-[32px]'>
        Funkcja aktualizująca status dokumentu <br/>
          - musi zajdować się w warstwie aplikacji <br/>
          - bez zmieniania struktury warstw <br/>
          - przyjmuje jako argument Id dokumentu i status do aktualizacji <br/>
          - lista dokumentów znajduje się w DocumentsRepository.cs w warstwie infrastruktury <br/>
          - dodaje do listy statusów nowy wpis z przekazanym statusem <br/>
          - przydane funkcje: <br/>
            - dokumenty.First(x =&gt; x.Id == id) =&gt; zwraca pierwszy dokument dla którego przekazana funkcja zwraca wartość true
        </div>  
        <button className='btn btn-lg btn-success' onClick={() => {router.push('2')}}>
          GO NEXT
        </button>
      </div>
    </>
  );
}
