import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-3 h-full gap-6 relative max-h-[780px]">
      <Skeleton className="col-span-2 h-[780px]" />
      <Skeleton className="col-span-1 h-[390px] my-auto" />
    </div>
  )
}
