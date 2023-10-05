import styles from './Banner.module.css';
import fundo from '../../assets/banner2.jpg';

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    DUST 3 Brasil
                </h1>

                <p className={styles.paragrafo}>
                    Bem vindo ao maior portal de CS:GO da mundo. <br />
                    Aqui você encontra as últimas notícias e atualizações, <br />
                    sobre o cenário de Counter Strike
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.fundo} src={fundo} alt="Banner" />
            </div>
        </div>
    )
}