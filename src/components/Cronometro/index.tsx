import Botao from '../Botao/index';
import Relogio from './Relogio/index';
import style from './Cronometro.module.scss';

export  default function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio />
        </div>
            <Botao>
            Começar!
            </Botao>
        </div>
    )
}
