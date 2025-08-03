import { useSelector } from "react-redux"
import { formatPrice } from '../utils'

const TotalItem = ({ title, item }) => {
  return (
    <p className={`flex justify-between text-xs border-b border-base-300 pb-2`}>
      <span>{title}</span>
      <span className="font-medium">{formatPrice(item)}</span>
    </p>
  )
}

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState);

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <TotalItem title={'Subtotal'} item={cartTotal} />
        {/* SHIPPING */}
        <TotalItem title={'Shipping'} item={shipping} />
        {/* TAX */}
        <TotalItem title={'Tax'} item={tax} />
        {/* ORDER TOTAL */}
        <p className={`flex justify-between text-sm mt-4 pb-2`}>
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>

      </div>
    </div>
  )
}

export default CartTotals