'use client'
import { useRouter } from "next/navigation";


export default function Lesson2() {

  const router = useRouter();

  return(
    <>
      <div className='w-full h-[200px] text-[48px] pl-16 pt-12'>
        <div className={'inline text-sky-400'}>Ov</div>Soft
      </div>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Dependency Injection</div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center text-[32px] text-center'>
        Dependency injection - wstrzykiwanie zależności.

        Wykorzystywanie jednej klasy wewnątrz innej. Najczęsciej poprzez przekazanie jej jako argument konstruktora lub funkcji.
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Czasy życia serwisu</div>  
        <div className='text-white text-[32px]'>
        - Singleton <br/>
        - Scoped <br/>
        - Transient <br/>
        </div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[1000px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">public class A</pre>
          <pre data-prefix="">{'{'}</pre>
          <pre data-prefix="">   private static int Instances = 1;</pre>
          <pre data-prefix="">   public A()</pre>
          <pre data-prefix="">   {'{'}</pre>
          <pre data-prefix="">      {'Console.WriteLine($"A: {Instances++}");'}</pre>
          <pre data-prefix="">   {'}'}</pre>
          <pre data-prefix="">{'}'}</pre>
        </div>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">public class B</pre>
          <pre data-prefix="">{'{'}</pre>
          <pre data-prefix="">   private static int Instances = 1;</pre>
          <pre data-prefix="">   public B()</pre>
          <pre data-prefix="">   {'{'}</pre>
          <pre data-prefix="">      {'Console.WriteLine($"B: {Instances++}");'}</pre>
          <pre data-prefix="">   {'}'}</pre>
          <pre data-prefix="">{'}'}</pre>
        </div>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">public class C</pre>
          <pre data-prefix="">{'{'}</pre>
          <pre data-prefix="">   private static int Instances = 1;</pre>
          <pre data-prefix="">   public C()</pre>
          <pre data-prefix="">   {'{'}</pre>
          <pre data-prefix="">      {'Console.WriteLine($"C: {Instances++}");'}</pre>
          <pre data-prefix="">   {'}'}</pre>
          <pre data-prefix="">{'}'}</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Rozwiązywanie zależności</div>  
        <div className='text-white text-[32px]'>
        Dotnet będzie próbował rozwiązać zależności w momencie kiedy program upomni się o dowolny z serwisów
        </div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Ograniczenia lifetime</div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Funkcja tworząca serwis</div>  
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">services.AddScoped((serviceProvider) =&gt; &#123; /* Więcej logiki */ return new A(); &#125;</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">services.AddSingleton((serviceProvider) =&gt; &#123; </pre> 
          <pre data-prefix="$">   serviceProvier.GetRequiredService&lt;TokenService&gt;().RefteshGlobalToken();</pre>
          <pre data-prefix="$">   return new A();</pre>
          <pre data-prefix="$"> &#125;;</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>HostedService</div>  
        <div className='text-white text-[32px] text-center p-16'>
        HostedService zostanie zainicjowany przy uruchomieniu aplikacji i służy rejestracji serwisów, które cyklicznie wykonują logikę. Serwis musi implementować serwis IHostedService.
        </div>  
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">services.AddHostedService&lt;StatusUpdater&gt;()&#125;</pre>
        </div>
      </div>
      <div className='w-full h-[800px] grid place-items-center'>
        <div className='text-white text-[64px]'>Rejestracja wielu serwisów pod tym samym typem</div>  
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">services.AddSingleton&lt;MyInterface, A&gt;()&#125;</pre>
          <pre data-prefix="$">services.AddSingleton&lt;MyInterface, B&gt;()&#125;</pre>
          <pre data-prefix="$">services.AddSingleton&lt;MyInterface, C&gt;()&#125;</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
        <div>
          <button className='btn btn-lg btn-error mr-12' onClick={() => {router.push('1')}}>
            GO BACK
          </button>
          <button className='btn btn-lg btn-success' onClick={() => {router.push('3')}}>
            GO NEXT
          </button>
        </div>
      </div>


      </>)
}
