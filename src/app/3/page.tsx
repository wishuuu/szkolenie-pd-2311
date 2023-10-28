'use client'
import { useRouter } from "next/navigation";


export default function Lesson3() {

  const router = useRouter();

  return(
      <>
      <div className='w-full h-[1200px] grid place-items-center'>
      <div className='text-white text-[64px]'>Entity Framework</div>  
      </div>
      <div className="divider"/>
      <div className='w-full grid place-items-center'>
      </div>
      <div className="divider"/>
      <div className='w-full h-[1200px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="$">Project.Infrastructure</pre>
          <pre data-prefix="">   DbContext.cs</pre>
          <pre data-prefix="">   Migrations/</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className='w-full h-[1200px] grid place-items-center'>
        <div className='mockup-code w-[1000px]'>
          <pre data-prefix="1">public class MyContext: DbContext</pre>
          <pre data-prefix="2">{'{'}</pre>
          <pre data-prefix="3">   public MyContext() {'{}'}</pre>
          <pre data-prefix="4"></pre>
          <pre data-prefix="5">{'   public DbSet<OINV> OINV {get; set;} '}</pre>
          <pre data-prefix="6">{'   public DbSet<INV1> INV1 {get; set;} '}</pre>
          <pre data-prefix="7">{'   public DbSet<OADM> OADM {get; set;} '}</pre>
          <pre data-prefix="8">{'}'}</pre>
        </div>
      </div>
      <div className="divider"/>
      <div className="divider"/>
      <div className='w-full h-[1200px] grid place-items-center'>
      <div className='text-white text-[42px]'>Data annotations</div>  
        <div className='mockup-code w-[1000px]'>
          {'\t'} OINV.cs
          <pre>...</pre>
          <pre>{'[Key] public int DocEntry { get; set; }'}</pre>
          <pre></pre>
          <pre>{'public ICollection<INV1> Positions { get; set; }'}</pre>
          <pre></pre>
          <pre>{'[ForeignKey("OCRD")] public string CardCode { get; set; }'}</pre>
          <pre>{'public OCRD OCRD { get; set; }'}</pre>
          <pre></pre>
          <pre>{'[NotMapped] public int NumOfRows => this.Position.Count()'}</pre>
          <pre>...</pre>
        </div>
      <div className='text-white text-[24px] text-center'>[Key] [ForeignKey(e)] [NotMapped] [Required] [MaxLength(x)] [MinLength(x)] [MaxLength(10, ErrorMessage="Text must be 10 characters or less")] [Timestamp] [DatabaseGenerated(DatabaseGeneratedOption.Computed)] [Index(IsUnique = true)] ... </div>  
      </div>
      <div className="divider"/>
      <div className='w-full h-[800px] grid place-items-center'>
      <div>
      <button className='btn btn-lg btn-error mr-12' onClick={() => {router.push('2')}}>
      GO BACK
      </button>
      <button className='btn btn-lg btn-success' onClick={() => {router.push('4')}}>
      GO NEXT
      </button>
      </div>
      </div>


      </>)
}
