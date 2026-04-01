import styles from '@/styles/InteriorVideo.module.css';

export default function InteriorVideo() {
  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper + ' container'}>
        <video
          className={styles.video}
          src="/videos/interiorvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}