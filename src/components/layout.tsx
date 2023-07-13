import { useScroll } from '@/hooks/use-scroll.ts'
import { MdCatchingPokemon } from 'react-icons/md'

import { Sidebar } from '@/components/sidebar.tsx'
import { GoTopButton } from '@/components/go-top-button.tsx'

export const Layout = ({ children }) => {
  const showUpButton = useScroll()

  return (
    <>
      <div className="container mx-auto p-5 pb-0 grid grid-cols-12 gap-5 relative">
        <div className="col-span-full lg:col-span-8 xl:col-span-9">
          {children}
        </div>
        <Sidebar />
      </div>
      <MdCatchingPokemon
        className="absolute rotate-45 md:left-[-280px] md:top-[-200px] left-[-200px] top-[-240px] -z-10 max-w-full text-gray-200"
        size={728}
      />
      {showUpButton && <GoTopButton />}
    </>
  )
}
