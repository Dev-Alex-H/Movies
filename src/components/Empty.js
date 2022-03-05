import styles from './Empty.module.css';

export default function Empty() {
    return (
        <div className={styles.emptyContent}>
            <div className={styles.empty}>
                <strong>No results</strong>
            </div>
        </div>
    )
}