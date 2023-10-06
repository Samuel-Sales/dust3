import BotaoPrincipal from '../../componentes/BotaoPrincipal/BotaoPrincipal';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Pagina nao encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que voce estava buscando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a pagina, ou volte para o menu inicial.
                </p>
                <div className={styles.botaoContainer} onClick={() => navegar('/')}>
                    <BotaoPrincipal tamanho='lg'>
                        Voltar
                    </BotaoPrincipal>
                </div>
            </div>
            <div className={styles.espacoEmBranco}>

            </div>
        </>
    );
}

export default NotFound;