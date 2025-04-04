import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BsCheckLg } from 'react-icons/bs'
import { UseAppContext } from '../context'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=`

const Gallery = () => {
  const { searchTerm } = UseAppContext()

  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}${searchTerm}`)
      return result.data.results
    },
  })
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>error...</h4>
      </section>
    )
  }

  const results = response.data
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>no results...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular

        return <img src={url} key={item.id} className="img" />
      })}
    </section>
  )
}

export default Gallery
