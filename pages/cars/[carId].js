import carsData from "@/data/carsData"
import { useRouter } from "next/router"
import CarDetails from "@/components/templates/CarDetails"
import { useEffect } from "react"

function CarPage() {
  const router = useRouter()
  const { carId } = router.query
  const carDetails = carsData[carId - 1]

  useEffect(() => {
    if (!carDetails) {
      router.replace("/404")
    }
  }, [carDetails, router])

  if (!carDetails) return null

  return <CarDetails {...carDetails} />
}

export default CarPage
