import { 
  IconArrowRight,
  IconSlice,
  IconBrandFlutter
} from '@tabler/icons'

const Tag = () => {
  return (
    <div className='my-16 flex flex-col'>
      <div className="flex flex-col gap-8">
        <a className="flex w-full flex-1 items-center justify-start rounded-lg border border-accent-2 p-4 transition-all duration-300 hover:scale-105 sm:px-6" href="/dart">
          <IconSlice />
          <div className="px-4">
            <div>Pemrograman Dart</div>
            <p>Bahasa pemrograman dart mulai dari basic, middle, advance seperti async</p>
          </div>
        </a>
        <a className="flex w-full flex-1 items-center justify-start rounded-lg border border-accent-2 p-4 transition-all duration-300 hover:scale-105 sm:px-6" href="/flutter">
          <IconBrandFlutter />
          <div className="px-4">
            <div>Flutter</div>
            <p>Framework flutter, basic konsep seperti widget dan konsep advance state, getX, dan lainya</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Tag