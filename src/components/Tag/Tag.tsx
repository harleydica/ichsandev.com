import { 
  IconArrowRight,
  IconSlice,
  IconBrandFlutter
} from '@tabler/icons'
import * as TablerIcon from '@tabler/icons'
import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

const Tag = () => {
  return (
    <div className='my-16 flex flex-col'>
      <div class="flex flex-col gap-8">
        <a class="flex w-full flex-1 items-center justify-start rounded-lg border border-accent-2 p-4 transition-all duration-300 hover:scale-105 sm:px-6" href="/dart">
          <IconSlice />
          <div class="px-4">
            <div>Pemrograman Dart</div>
            <p>Bahasa pemrograman dart mulai dari basic, middle, advance seperti async</p>
          </div>
        </a>
        <a class="flex w-full flex-1 items-center justify-start rounded-lg border border-accent-2 p-4 transition-all duration-300 hover:scale-105 sm:px-6" href="/flutter">
          <IconBrandFlutter />
          <div class="px-4">
            <div>Flutter</div>
            <p>Framework flutter, basic konsep seperti widget dan konsep advance state, getX, dan lainya</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Tag