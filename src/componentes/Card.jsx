import styles from './card_evento.module.css'

export function Card({evento}) {
    return (
        
    <div className={styles.movieCard}>
      <div>
        
        {/* 1. A Capa do Filme */}
        <img className={styles.moviePoster} src={evento.capa} alt={evento.titulo} />
        
        {/* 2. O degradê escuro na base da imagem (essencial para ler o texto branco) */}
        <div className={styles.gradient}></div>

        <p className={styles.tema}>{evento.mini_card.nome} </p>
        
        {/* 3. Os Textos flutuando por cima */}
        <div className={styles.container2}>
          
          {/* Título puxado da prop */}
            <h4 className={styles.textWrapper2}>{evento.titulo}</h4>
          
          {/* Duração puxada da prop (e o ícone, se você for usar) */}
          <div>
            
            <div className={styles.textrapper3}><img src={evento.reloginho} alt=''/> {evento.desc}</div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};
