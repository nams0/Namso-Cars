import carsData from "@/data/carsData"
import CarsList from "@/components/templates/CarsList"
import { useRouter } from "next/router"
import { useEffect } from "react"

function Category() {
  const router = useRouter()
  const { category } = router.query
  const filteredCars = carsData.filter((car) => car.category === category)
  useEffect(() => {
    if (!router.isReady) return
    if (filteredCars.length === 0) {
      router.replace("/404")
    }
  }, [router.isReady, category, filteredCars.length])

  //prevents flash
  if (!router.isReady) return null
  if (filteredCars.length === 0) return null

  return <CarsList data={filteredCars} />
}

export default Category
