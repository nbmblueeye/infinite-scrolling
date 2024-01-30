type Props ={
  price:number
}

const PriceFormat = ({price}:Props) => {

  let priceFormatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    price,
  )

return (
  <>
    <p className="prices text-danger fs-5"><strong>Price: </strong>{priceFormatted}</p>
  </>
  )
}

export default PriceFormat


