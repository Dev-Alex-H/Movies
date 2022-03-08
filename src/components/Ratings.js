import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function Ratings({ rating }) {
    const starAppear = [];
    const stars = (rating) => {
        for (let i = 0; i < rating / 2; i++) {
            if (rating / 2 - i >= 1) {
                starAppear.push(<FaStar key={i} size={20} />)
            } else if (rating / 2 - i > 0 && rating / 2 - i < 1) {
                starAppear.push(<FaStarHalf key={i} size={20} />);
            }
        }
        return starAppear;
    }
    return stars(rating)
}