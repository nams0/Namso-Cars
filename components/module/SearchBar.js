import { useState } from "react"
import styles from "./SearchBar.module.css"
import { useRouter } from "next/router"

function SearchBar() {
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const router = useRouter()
  const onlyDigits = (value) => value.replace(/\D/g, "")

  const searchHandler = () => {
    const params = {}
    if (min) params.min = min
    if (max) params.max = max
    if (Object.keys(params).length === 0)
      return alert("Enter at least one of the min or max values")

    router.push({
      pathname: "/cars/filter",
      query: params,
    })
  }
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Type min-price"
          value={min}
          onChange={(e) => setMin(onlyDigits(e.target.value))}
        />
        <input
          placeholder="Type max-price"
          value={max}
          onChange={(e) => setMax(onlyDigits(e.target.value))}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default SearchBar
