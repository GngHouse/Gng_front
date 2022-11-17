import styles from "../../styles/Page1.module.css";
import Carousel from 'nuka-carousel';

export default function Page1() {
  return (
    <div>
      <img className={styles.background1} src="/img/background1.png"></img>
      <div className={styles.flex}>
        <div className={styles.space}>
          <div className={styles.left}>
            <span className={styles.gnghouse}>GNG GOUSE</span>
            <span className={styles.공간연출}>공간 연출</span>
            <span className={styles.공간연출글}>
              특별한 추억은 특별한 시간으로부터, 특별한 시간은 특별한
              공간으로부터 시작됩니다.
              <br />
              <br />
              GNG HOUSE에서 여러분들을 위한 공간을 특별한 추억으로
              만들어드리겠습니다.
            </span>
            <div className={styles.바로가기}>
              <div className={styles.바로가기between}>
                <span className={styles.바로가기글}>바로가기</span>
                <img className={styles.화살표} src="/img/arrow.png"></img>
              </div>
            </div>
            <span className={styles.공간대여}>공간대여</span>
          </div>
          <div className={styles.right}>
            <Carousel>
              <img className={styles.img} src="/img/img1.png" />
              <img className={styles.img} src="/img/img2.png" />
              <img className={styles.img} src="/img/img3.png" />
              <img className={styles.img} src="/img/img4.png" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
