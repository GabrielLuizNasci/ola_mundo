import BotaoPrincipal from 'components/BotaoPrincipal';
import styles from './NotFound.module.css';
import error404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Página não encontrada! Tente novamente!
                </h1>
                <p className={styles.paragrafo}>
                    A página que procurava não está disponível ou foi removida.
                </p>
                <p className={styles.paragrafo}>
                    Pedimos que recarregue a página ou retorne a página principal e tente novamente.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar("/")}
                >
                    <BotaoPrincipal
                        tamanho={"lg"}
                    >
                        Retornar a Página Principal.
                    </BotaoPrincipal>
                </div>

                <img 
                    className={styles.imagemCachorro}
                    src={error404}
                    alt='Foto do cachorrinho de oculos'
                />
            </div>
            <div className={styles.espacoEmBranco} >
                
            </div>
        </>
    )
}