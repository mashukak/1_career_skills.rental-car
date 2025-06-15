import styles from './LoadMoreButton.module.css';

export default function LoadMoreButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.loadMoreButton}
      style={{
        fontFamily: 'Manrope',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0%',
        width: '80px',
        height: '20px',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      Load More
    </button>
  );
}
