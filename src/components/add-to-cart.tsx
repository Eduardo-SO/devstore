'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartProps {
  productId: number
}

export function AddToCart({ productId }: AddToCartProps) {
  const { addToCart } = useCart()

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={() => addToCart(productId)}
    >
      Adicionar ao carrinho
    </button>
  )
}
