  import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
  export default function ratingStars(ratingsAverage: number): React.ReactNode {
      let rating = Math.max(0, Math.min(5, ratingsAverage))
      const stars = []
      
      for (let i = 0; i < 5; i++) {
        if (rating >= 1) {
          stars.push(<FaStar key={i} />)
          rating -= 1
        } else if (rating >= 0.5) {
          stars.push(<FaStarHalfAlt key={i} />)
          rating -= 0.5
        } else {
          stars.push(<FaRegStar key={i} />)
        }
      }

      return stars
    }
