import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';
import styles from './About.module.css';


export default function About() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Saudações, meu nome é Gabriel.
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Responsável Gabriel Luiz"
                className={styles.fotoSobreMim}
            />
        </PostModelo>
    )
}