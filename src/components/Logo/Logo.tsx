import React from 'react'

import clsxm from '@/lib/clsxm'

const Logo = (props: React.ComponentPropsWithRef<'svg'>) => {
  const { className } = props

  return (
   <span className="font-bold text-lg">&gt;_ cd /IchsanDev/</span>
  )
}

export default Logo
