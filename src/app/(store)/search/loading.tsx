import { Skeleton } from '@/components/skeleton'
import { Suspense } from 'react'
import { CurrentSearch } from './current-search'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className="h-[480px]" />
        ))}
      </div>
    </div>
  )
}
