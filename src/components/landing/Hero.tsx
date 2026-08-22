import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Исламское финансирование</p>
          <h1>
            Исламская рассрочка
            <span>честно и прозрачно.</span>
          </h1>
          <p className={styles.lead}>
            Финансирование покупок без процентов и скрытых комиссий, в
            соответствии с принципами исламского финансирования.
          </p>
          <div className={styles.actions}>
            <a href="#calculator" className="btn btn-primary">
              Рассчитать рассрочку
            </a>
            <a href="#how" className="btn btn-secondary">
              Как это работает
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden>
          <div className={styles.orb} />
          <div className={styles.orbSoft} />
          <div className={styles.panel}>
            <div className={styles.pattern} />
            <div className={styles.metric}>
              <span>Ежемесячный платёж</span>
              <strong>8 333 ₽</strong>
            </div>
            <div className={styles.rows}>
              <div>
                <span>Сумма</span>
                <b>100 000 ₽</b>
              </div>
              <div>
                <span>Срок</span>
                <b>12 мес.</b>
              </div>
              <div>
                <span>Переплата</span>
                <b>0 ₽</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
