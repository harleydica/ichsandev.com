import { useMDXComponent } from 'next-contentlayer/hooks'
import Tag from '@/components/tag'

const CategoriPage = () => {
  return (
    <>
      <h1 className='my-4 text-3xl font-bold'>Kategori 🏷️</h1>
      <h1 className='my-4'>Silahkan dipilih artikel dengan kategori yang anda inginkan</h1>
      <Tag />
    </>
  )
}

export default CategoriPage
