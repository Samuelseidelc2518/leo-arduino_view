import styles from "../App.module.css";

const Potentiometers = ({ data }) => {
  return (
    <div class={styles.panel__potentiometers}>
      {/* Voltios */}
      <div class={styles.potentiometers}>
        <div class={styles.potentiometer}>
          <div class={styles["turning-box"]}>
            <div class={styles["turning-box__text"]}>{data()[0]}v</div>
          </div>
        </div>
        <div class={styles.potentiometer}>
          <div class={styles["turning-box"]}>
            <div class={styles["turning-box__text"]}>{data()[1]}v</div>
          </div>
        </div>
        <div class={styles.potentiometer}>
          <div class={styles["turning-box"]}>
            <div class={styles["turning-box__text"]}>{data()[2]}v</div>
          </div>
        </div>
        <div class={styles.potentiometer}>
          <div class={styles["turning-box"]}>
            <div class={styles["turning-box__text"]}>{data()[3]}v</div>
          </div>
        </div>
      </div>

      {/* GND's */}
      <div class={styles["potentiometers-gnd"]}>
        <div class={styles.potentiometer}>
          <div class={styles.potentiometer__title}>GND</div>
          <div class={styles.potentiometer__dots}>
            <div class={`${styles.dot} ${data()[4] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[5] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[6] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[7] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[8] == "1" && `${styles["dot--active"]}`}`}></div>
          </div>
        </div>

        <div class={styles.potentiometer}>
          <div class={styles.potentiometer__title}>GND</div>
          <div class={styles.potentiometer__dots}>
            <div class={`${styles.dot} ${data()[9] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[10] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[11] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[12] == "1" && `${styles["dot--active"]}`}`}></div>
            <div class={`${styles.dot} ${data()[13] == "1" && `${styles["dot--active"]}`}`}></div>
          </div>
        </div>
      </div>

      {/* IAC BOX */}
      <div class={styles.control__item}>
        <div class={styles.control__item__title}>IAC BOX</div>
        <div class={styles.control__item__icon}>
          <div class={styles.control__iac}>
            <div
              class={`${styles.control__iac__icon} ${styles["control__iac__icon-1"]} ${data()[14] == "1" && `${styles["control__iac__icon--active"]}`}`}
            >
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.4048 4.1434V32.392C38.3397 32.6245 38.2811 32.8592 38.2072 33.0887C37.6385 34.8484 36.1108 35.9165 34.1558 35.9172H5.17801C5.04333 35.9172 4.90938 35.9172 4.77543 35.9084C3.45496 35.8128 2.40777 35.2243 1.63384 34.1429C1.25688 33.6154 1.09731 33.0026 0.928223 32.392V4.1434C0.942862 4.12427 0.965552 4.10735 0.970676 4.08602C1.52624 1.74226 2.94698 0.612317 5.34856 0.612317H28.4625C30.4388 0.612317 32.4151 0.585834 34.3871 0.621145C36.075 0.652042 37.2908 1.4789 38.0432 2.99874C38.2233 3.36288 38.2701 3.76675 38.4048 4.1434ZM3.12412 18.239C3.12412 22.751 3.12412 27.2629 3.12412 31.7748C3.12412 32.9063 3.90732 33.7059 5.02723 33.7096C7.47858 33.7169 9.93139 33.7096 12.3827 33.7169C12.6199 33.7169 12.7019 33.6544 12.6968 33.4094C12.685 32.8209 12.6828 32.2324 12.7048 31.6439C12.778 29.6143 14.4286 27.8862 16.4488 27.8303C18.5817 27.7715 20.7176 27.7759 22.8513 27.8303C24.6812 27.8752 26.2059 29.2582 26.558 31.0672C26.7 31.7962 26.6312 32.5348 26.6268 33.2682C26.6268 33.6125 26.7 33.7221 27.066 33.7191C29.3958 33.7008 31.7256 33.7103 34.0555 33.7096C35.4997 33.7096 36.2097 32.996 36.2097 31.5446V4.98791C36.2097 4.86506 36.2097 4.74221 36.2097 4.62009C36.1753 3.62109 35.3964 2.82512 34.3988 2.82071C31.9101 2.80821 29.4214 2.82071 26.9327 2.80968C26.6736 2.80968 26.6341 2.91046 26.6399 3.13189C26.6487 3.7079 26.6531 4.28464 26.6319 4.86065C26.547 6.94693 24.8671 8.66318 22.7913 8.70511C20.7154 8.74705 18.6191 8.7419 16.5344 8.70511C14.7155 8.67275 13.1447 7.30077 12.7817 5.51169C12.6265 4.74662 12.7026 3.97126 12.7033 3.20104C12.7033 2.89943 12.6301 2.81041 12.3213 2.81188C9.9431 2.82513 7.56348 2.81851 5.18533 2.81924C3.8634 2.81998 3.12412 3.56298 3.12412 4.88713V18.239ZM19.6424 33.7103C21.129 33.7103 22.6156 33.703 24.1022 33.7169C24.3782 33.7169 24.4602 33.6434 24.4484 33.3675C24.4265 32.8526 24.4521 32.3376 24.4375 31.8227C24.4104 30.8281 23.7055 30.0395 22.7239 30.0233C20.6901 29.9894 18.6554 29.9894 16.6201 30.0233C15.6371 30.0387 14.9234 30.8222 14.8956 31.8124C14.8802 32.3383 14.9044 32.8658 14.8846 33.3918C14.8743 33.6566 14.9695 33.7169 15.2184 33.7147C16.6933 33.7052 18.1675 33.7103 19.6424 33.7103ZM19.6782 2.81924C18.1916 2.81924 16.7043 2.82439 15.2176 2.81409C14.971 2.81409 14.8736 2.86485 14.8846 3.13336C14.9058 3.64831 14.8846 4.16326 14.8941 4.67821C14.9175 5.72282 15.6627 6.50187 16.6933 6.51069C18.6798 6.52786 20.6664 6.52786 22.6529 6.51069C23.6638 6.50113 24.4097 5.72503 24.4382 4.70248C24.4521 4.18754 24.4258 3.67259 24.4492 3.15764C24.4624 2.87809 24.3716 2.81189 24.1022 2.81409C22.6273 2.82733 21.1524 2.81924 19.6782 2.81924Z"
                  fill="#00FFFF"
                />
                <path
                  d="M19.2456 21.2028C15.962 21.1358 12.7875 19.8551 10.1421 17.2766C9.80251 16.9449 9.67881 16.5564 9.80251 16.1077C9.85121 15.9216 9.95081 15.753 10.09 15.6209C10.2292 15.4888 10.4025 15.3985 10.5901 15.3603C11.0373 15.2477 11.3953 15.4177 11.7129 15.7281C12.835 16.8316 14.1116 17.7077 15.5923 18.2293C19.9944 19.7761 23.9502 18.9958 27.4597 15.8885C27.5329 15.8237 27.601 15.7531 27.6727 15.6862C28.1814 15.2154 28.8321 15.2043 29.2728 15.659C29.7134 16.1136 29.6775 16.7904 29.1996 17.2678C28.1248 18.3415 26.877 19.2247 25.509 19.8801C23.6798 20.7562 21.6501 21.2108 19.2456 21.2028Z"
                  fill="#00FFFF"
                />
              </svg>
            </div>
            <div
              class={`${styles.control__iac__icon} ${styles["control__iac__icon-2"]} ${data()[15] == "1" && `${styles["control__iac__icon--active"]}`}`}
            >
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.4048 4.1434V32.392C38.3397 32.6245 38.2811 32.8592 38.2072 33.0887C37.6385 34.8484 36.1108 35.9165 34.1558 35.9172H5.17801C5.04333 35.9172 4.90938 35.9172 4.77543 35.9084C3.45496 35.8128 2.40777 35.2243 1.63384 34.1429C1.25688 33.6154 1.09731 33.0026 0.928223 32.392V4.1434C0.942862 4.12427 0.965552 4.10735 0.970676 4.08602C1.52624 1.74226 2.94698 0.612317 5.34856 0.612317H28.4625C30.4388 0.612317 32.4151 0.585834 34.3871 0.621145C36.075 0.652042 37.2908 1.4789 38.0432 2.99874C38.2233 3.36288 38.2701 3.76675 38.4048 4.1434ZM3.12412 18.239C3.12412 22.751 3.12412 27.2629 3.12412 31.7748C3.12412 32.9063 3.90732 33.7059 5.02723 33.7096C7.47858 33.7169 9.93139 33.7096 12.3827 33.7169C12.6199 33.7169 12.7019 33.6544 12.6968 33.4094C12.685 32.8209 12.6828 32.2324 12.7048 31.6439C12.778 29.6143 14.4286 27.8862 16.4488 27.8303C18.5817 27.7715 20.7176 27.7759 22.8513 27.8303C24.6812 27.8752 26.2059 29.2582 26.558 31.0672C26.7 31.7962 26.6312 32.5348 26.6268 33.2682C26.6268 33.6125 26.7 33.7221 27.066 33.7191C29.3958 33.7008 31.7256 33.7103 34.0555 33.7096C35.4997 33.7096 36.2097 32.996 36.2097 31.5446V4.98791C36.2097 4.86506 36.2097 4.74221 36.2097 4.62009C36.1753 3.62109 35.3964 2.82512 34.3988 2.82071C31.9101 2.80821 29.4214 2.82071 26.9327 2.80968C26.6736 2.80968 26.6341 2.91046 26.6399 3.13189C26.6487 3.7079 26.6531 4.28464 26.6319 4.86065C26.547 6.94693 24.8671 8.66318 22.7913 8.70511C20.7154 8.74705 18.6191 8.7419 16.5344 8.70511C14.7155 8.67275 13.1447 7.30077 12.7817 5.51169C12.6265 4.74662 12.7026 3.97126 12.7033 3.20104C12.7033 2.89943 12.6301 2.81041 12.3213 2.81188C9.9431 2.82513 7.56348 2.81851 5.18533 2.81924C3.8634 2.81998 3.12412 3.56298 3.12412 4.88713V18.239ZM19.6424 33.7103C21.129 33.7103 22.6156 33.703 24.1022 33.7169C24.3782 33.7169 24.4602 33.6434 24.4484 33.3675C24.4265 32.8526 24.4521 32.3376 24.4375 31.8227C24.4104 30.8281 23.7055 30.0395 22.7239 30.0233C20.6901 29.9894 18.6554 29.9894 16.6201 30.0233C15.6371 30.0387 14.9234 30.8222 14.8956 31.8124C14.8802 32.3383 14.9044 32.8658 14.8846 33.3918C14.8743 33.6566 14.9695 33.7169 15.2184 33.7147C16.6933 33.7052 18.1675 33.7103 19.6424 33.7103ZM19.6782 2.81924C18.1916 2.81924 16.7043 2.82439 15.2176 2.81409C14.971 2.81409 14.8736 2.86485 14.8846 3.13336C14.9058 3.64831 14.8846 4.16326 14.8941 4.67821C14.9175 5.72282 15.6627 6.50187 16.6933 6.51069C18.6798 6.52786 20.6664 6.52786 22.6529 6.51069C23.6638 6.50113 24.4097 5.72503 24.4382 4.70248C24.4521 4.18754 24.4258 3.67259 24.4492 3.15764C24.4624 2.87809 24.3716 2.81189 24.1022 2.81409C22.6273 2.82733 21.1524 2.81924 19.6782 2.81924Z"
                  fill="#00FFFF"
                />
                <path
                  d="M19.2456 21.2028C15.962 21.1358 12.7875 19.8551 10.1421 17.2766C9.80251 16.9449 9.67881 16.5564 9.80251 16.1077C9.85121 15.9216 9.95081 15.753 10.09 15.6209C10.2292 15.4888 10.4025 15.3985 10.5901 15.3603C11.0373 15.2477 11.3953 15.4177 11.7129 15.7281C12.835 16.8316 14.1116 17.7077 15.5923 18.2293C19.9944 19.7761 23.9502 18.9958 27.4597 15.8885C27.5329 15.8237 27.601 15.7531 27.6727 15.6862C28.1814 15.2154 28.8321 15.2043 29.2728 15.659C29.7134 16.1136 29.6775 16.7904 29.1996 17.2678C28.1248 18.3415 26.877 19.2247 25.509 19.8801C23.6798 20.7562 21.6501 21.2108 19.2456 21.2028Z"
                  fill="#00FFFF"
                />
              </svg>
            </div>
            <div
              class={`${styles.control__iac__icon} ${styles["control__iac__icon-3"]} ${data()[16] == "1" && `${styles["control__iac__icon--active"]}`}`}
            >
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.4048 4.1434V32.392C38.3397 32.6245 38.2811 32.8592 38.2072 33.0887C37.6385 34.8484 36.1108 35.9165 34.1558 35.9172H5.17801C5.04333 35.9172 4.90938 35.9172 4.77543 35.9084C3.45496 35.8128 2.40777 35.2243 1.63384 34.1429C1.25688 33.6154 1.09731 33.0026 0.928223 32.392V4.1434C0.942862 4.12427 0.965552 4.10735 0.970676 4.08602C1.52624 1.74226 2.94698 0.612317 5.34856 0.612317H28.4625C30.4388 0.612317 32.4151 0.585834 34.3871 0.621145C36.075 0.652042 37.2908 1.4789 38.0432 2.99874C38.2233 3.36288 38.2701 3.76675 38.4048 4.1434ZM3.12412 18.239C3.12412 22.751 3.12412 27.2629 3.12412 31.7748C3.12412 32.9063 3.90732 33.7059 5.02723 33.7096C7.47858 33.7169 9.93139 33.7096 12.3827 33.7169C12.6199 33.7169 12.7019 33.6544 12.6968 33.4094C12.685 32.8209 12.6828 32.2324 12.7048 31.6439C12.778 29.6143 14.4286 27.8862 16.4488 27.8303C18.5817 27.7715 20.7176 27.7759 22.8513 27.8303C24.6812 27.8752 26.2059 29.2582 26.558 31.0672C26.7 31.7962 26.6312 32.5348 26.6268 33.2682C26.6268 33.6125 26.7 33.7221 27.066 33.7191C29.3958 33.7008 31.7256 33.7103 34.0555 33.7096C35.4997 33.7096 36.2097 32.996 36.2097 31.5446V4.98791C36.2097 4.86506 36.2097 4.74221 36.2097 4.62009C36.1753 3.62109 35.3964 2.82512 34.3988 2.82071C31.9101 2.80821 29.4214 2.82071 26.9327 2.80968C26.6736 2.80968 26.6341 2.91046 26.6399 3.13189C26.6487 3.7079 26.6531 4.28464 26.6319 4.86065C26.547 6.94693 24.8671 8.66318 22.7913 8.70511C20.7154 8.74705 18.6191 8.7419 16.5344 8.70511C14.7155 8.67275 13.1447 7.30077 12.7817 5.51169C12.6265 4.74662 12.7026 3.97126 12.7033 3.20104C12.7033 2.89943 12.6301 2.81041 12.3213 2.81188C9.9431 2.82513 7.56348 2.81851 5.18533 2.81924C3.8634 2.81998 3.12412 3.56298 3.12412 4.88713V18.239ZM19.6424 33.7103C21.129 33.7103 22.6156 33.703 24.1022 33.7169C24.3782 33.7169 24.4602 33.6434 24.4484 33.3675C24.4265 32.8526 24.4521 32.3376 24.4375 31.8227C24.4104 30.8281 23.7055 30.0395 22.7239 30.0233C20.6901 29.9894 18.6554 29.9894 16.6201 30.0233C15.6371 30.0387 14.9234 30.8222 14.8956 31.8124C14.8802 32.3383 14.9044 32.8658 14.8846 33.3918C14.8743 33.6566 14.9695 33.7169 15.2184 33.7147C16.6933 33.7052 18.1675 33.7103 19.6424 33.7103ZM19.6782 2.81924C18.1916 2.81924 16.7043 2.82439 15.2176 2.81409C14.971 2.81409 14.8736 2.86485 14.8846 3.13336C14.9058 3.64831 14.8846 4.16326 14.8941 4.67821C14.9175 5.72282 15.6627 6.50187 16.6933 6.51069C18.6798 6.52786 20.6664 6.52786 22.6529 6.51069C23.6638 6.50113 24.4097 5.72503 24.4382 4.70248C24.4521 4.18754 24.4258 3.67259 24.4492 3.15764C24.4624 2.87809 24.3716 2.81189 24.1022 2.81409C22.6273 2.82733 21.1524 2.81924 19.6782 2.81924Z"
                  fill="#00FFFF"
                />
                <path
                  d="M19.2456 21.2028C15.962 21.1358 12.7875 19.8551 10.1421 17.2766C9.80251 16.9449 9.67881 16.5564 9.80251 16.1077C9.85121 15.9216 9.95081 15.753 10.09 15.6209C10.2292 15.4888 10.4025 15.3985 10.5901 15.3603C11.0373 15.2477 11.3953 15.4177 11.7129 15.7281C12.835 16.8316 14.1116 17.7077 15.5923 18.2293C19.9944 19.7761 23.9502 18.9958 27.4597 15.8885C27.5329 15.8237 27.601 15.7531 27.6727 15.6862C28.1814 15.2154 28.8321 15.2043 29.2728 15.659C29.7134 16.1136 29.6775 16.7904 29.1996 17.2678C28.1248 18.3415 26.877 19.2247 25.509 19.8801C23.6798 20.7562 21.6501 21.2108 19.2456 21.2028Z"
                  fill="#00FFFF"
                />
              </svg>
            </div>
            <div
              class={`${styles.control__iac__icon} ${styles["control__iac__icon-4"]} ${data()[17] == "1" && `${styles["control__iac__icon--active"]}`}`}
            >
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.4048 4.1434V32.392C38.3397 32.6245 38.2811 32.8592 38.2072 33.0887C37.6385 34.8484 36.1108 35.9165 34.1558 35.9172H5.17801C5.04333 35.9172 4.90938 35.9172 4.77543 35.9084C3.45496 35.8128 2.40777 35.2243 1.63384 34.1429C1.25688 33.6154 1.09731 33.0026 0.928223 32.392V4.1434C0.942862 4.12427 0.965552 4.10735 0.970676 4.08602C1.52624 1.74226 2.94698 0.612317 5.34856 0.612317H28.4625C30.4388 0.612317 32.4151 0.585834 34.3871 0.621145C36.075 0.652042 37.2908 1.4789 38.0432 2.99874C38.2233 3.36288 38.2701 3.76675 38.4048 4.1434ZM3.12412 18.239C3.12412 22.751 3.12412 27.2629 3.12412 31.7748C3.12412 32.9063 3.90732 33.7059 5.02723 33.7096C7.47858 33.7169 9.93139 33.7096 12.3827 33.7169C12.6199 33.7169 12.7019 33.6544 12.6968 33.4094C12.685 32.8209 12.6828 32.2324 12.7048 31.6439C12.778 29.6143 14.4286 27.8862 16.4488 27.8303C18.5817 27.7715 20.7176 27.7759 22.8513 27.8303C24.6812 27.8752 26.2059 29.2582 26.558 31.0672C26.7 31.7962 26.6312 32.5348 26.6268 33.2682C26.6268 33.6125 26.7 33.7221 27.066 33.7191C29.3958 33.7008 31.7256 33.7103 34.0555 33.7096C35.4997 33.7096 36.2097 32.996 36.2097 31.5446V4.98791C36.2097 4.86506 36.2097 4.74221 36.2097 4.62009C36.1753 3.62109 35.3964 2.82512 34.3988 2.82071C31.9101 2.80821 29.4214 2.82071 26.9327 2.80968C26.6736 2.80968 26.6341 2.91046 26.6399 3.13189C26.6487 3.7079 26.6531 4.28464 26.6319 4.86065C26.547 6.94693 24.8671 8.66318 22.7913 8.70511C20.7154 8.74705 18.6191 8.7419 16.5344 8.70511C14.7155 8.67275 13.1447 7.30077 12.7817 5.51169C12.6265 4.74662 12.7026 3.97126 12.7033 3.20104C12.7033 2.89943 12.6301 2.81041 12.3213 2.81188C9.9431 2.82513 7.56348 2.81851 5.18533 2.81924C3.8634 2.81998 3.12412 3.56298 3.12412 4.88713V18.239ZM19.6424 33.7103C21.129 33.7103 22.6156 33.703 24.1022 33.7169C24.3782 33.7169 24.4602 33.6434 24.4484 33.3675C24.4265 32.8526 24.4521 32.3376 24.4375 31.8227C24.4104 30.8281 23.7055 30.0395 22.7239 30.0233C20.6901 29.9894 18.6554 29.9894 16.6201 30.0233C15.6371 30.0387 14.9234 30.8222 14.8956 31.8124C14.8802 32.3383 14.9044 32.8658 14.8846 33.3918C14.8743 33.6566 14.9695 33.7169 15.2184 33.7147C16.6933 33.7052 18.1675 33.7103 19.6424 33.7103ZM19.6782 2.81924C18.1916 2.81924 16.7043 2.82439 15.2176 2.81409C14.971 2.81409 14.8736 2.86485 14.8846 3.13336C14.9058 3.64831 14.8846 4.16326 14.8941 4.67821C14.9175 5.72282 15.6627 6.50187 16.6933 6.51069C18.6798 6.52786 20.6664 6.52786 22.6529 6.51069C23.6638 6.50113 24.4097 5.72503 24.4382 4.70248C24.4521 4.18754 24.4258 3.67259 24.4492 3.15764C24.4624 2.87809 24.3716 2.81189 24.1022 2.81409C22.6273 2.82733 21.1524 2.81924 19.6782 2.81924Z"
                  fill="#00FFFF"
                />
                <path
                  d="M19.2456 21.2028C15.962 21.1358 12.7875 19.8551 10.1421 17.2766C9.80251 16.9449 9.67881 16.5564 9.80251 16.1077C9.85121 15.9216 9.95081 15.753 10.09 15.6209C10.2292 15.4888 10.4025 15.3985 10.5901 15.3603C11.0373 15.2477 11.3953 15.4177 11.7129 15.7281C12.835 16.8316 14.1116 17.7077 15.5923 18.2293C19.9944 19.7761 23.9502 18.9958 27.4597 15.8885C27.5329 15.8237 27.601 15.7531 27.6727 15.6862C28.1814 15.2154 28.8321 15.2043 29.2728 15.659C29.7134 16.1136 29.6775 16.7904 29.1996 17.2678C28.1248 18.3415 26.877 19.2247 25.509 19.8801C23.6798 20.7562 21.6501 21.2108 19.2456 21.2028Z"
                  fill="#00FFFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potentiometers;
