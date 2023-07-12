import { useScroll } from '@/hooks/use-scroll.ts'

import { Sidebar } from '@/components/sidebar.tsx'
import { GoTopButton } from '@/components/go-top-button.tsx'

export const Layout = ({ children }) => {
  const showUpButton = useScroll()

  return (
    <>
      <div className="container mx-auto p-5 pb-0 grid grid-cols-12 gap-5">
        <div className="col-span-9">{children}</div>
        <Sidebar />
      </div>
      {showUpButton && <GoTopButton />}
    </>
  )
}
