import { FaStar, FaStarHalf } from 'react-icons/fa';
import styles from './Ratings.module.css';

export default function Ratings({ rating }) {
    const starAppear = [];
    const stars = (rating) => {
        for (let i = 0; i < rating / 2; i++) {
            if (rating / 2 - i >= 1) {
                starAppear.push(<FaStar key={i} size={15} />)
            } else if (rating / 2 - i > 0 && rating / 2 - i < 1) {
                starAppear.push(<FaStarHalf key={i} size={15} />);
            }
        }
        return (
            <div className={styles.ratingContent}>
                <span className={styles.ratingStars}>{starAppear}</span>
                <span className={styles.ratingNumber}>{rating / 2}</span>
            </div>
        );
    }
    return stars(rating);
}