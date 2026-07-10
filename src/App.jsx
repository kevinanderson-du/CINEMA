import { Content } from './componentes/Content' // Importe o componente que você criou
import {EmCartazSection} from './componentes/Em_cartaz'
import { Tema } from './componentes/Tema'
import { Card } from './componentes/Card'

import './App.css'

function App() {
  
const temas = [
    {
      id: 1, nome: 'Em Cartaz', icone: "./icone cinema.svg",
    },

    {
      id: 2, nome: 'Pra matar a fome', icone: "./PIPOCA2.svg"
    },

    {
      id: 3, nome: 'Meus ingressos', icone: "./INGRESSOS.svg"
    },
    
     ]


const eventos = [
    {
    capa: '/michael.png',
    mini_card: temas[0],
    
    titulo: 'Michael',
    reloginho: '/reloginho.svg',
    desc: '164 min',
    id: 0},

    {
    capa: '/the batman.png',
    mini_card: temas[0],
    
    titulo: 'The Batman',
    reloginho: '/reloginho.svg',
    desc: '181 min',
    id: 1},

    {
    capa: '/interestelar.png',
    mini_card: temas[0],
    
    titulo: 'Interestelar',
    reloginho: '/reloginho.svg',
    desc: '169 min',
    id: 2},

    {
    capa: '/titanic.png',
    mini_card: temas[0],
    
    titulo: 'Titanic',
    reloginho: '/reloginho.svg',
    desc: '189 min',
    id: 3},

    {
    capa: '/toy story.png',
    mini_card: temas[0],
    
    titulo: 'Toy Story',
    reloginho: '/reloginho.svg',
    desc: '142 min',
    id: 3},

    {
    capa: '/devorador.png',
    mini_card: temas[0],
    
    titulo: 'Devorador de Estrelas',
    reloginho: '/reloginho.svg',
    desc: '156 min',
    id: 4},

    {
    capa: '/COMBO CASAL 2.png',
    mini_card: temas[1],
    
    titulo: 'Combo Casal P',
    
    desc: 'R$ 64,00',
    id: 0},

    {
    capa: '/COMBO PIPOCA 1.png',
    mini_card: temas[1],
    
    titulo: 'Combo Casal M',
    
    desc: 'R$ 70,00',
    id: 1},

    {
    capa: '/CASAL G.png',
    mini_card: temas[1],
    
    titulo: 'Combo Casal G',
    
    desc: 'R$ 78,00',
    id: 2},

    {
    capa: '/COMBO INDIVIDUAL.png',
    mini_card: temas[1],
    
    titulo: 'Combo Individual',
    
    desc: 'R$ 38,00',
    id: 3},

    {
    capa: '/REFRIS.png',
    mini_card: temas[1],
    
    titulo: 'Combo Refil Duplo',
    
    desc: 'R$ 35,00',
    id: 4},

    {
    capa: '/COMBO BASICO.png',
    mini_card: temas[1],
    
    titulo: 'Combo Básico',
    
    desc: 'R$ 32,00',
    id: 5},

    

    
  ]


  return (
    <main>
      <header className='header-glass'>
        
          <img className='cineritz' src='./CineRITZ.png' alt=''/>
        
      </header>
      <section className='fundo-duna'>
        <Content className='content'/>
        
      </section>

     <div className="container-prateleiras">
     
     {temas.map(function(temaAtual) {
  
  // 2. O FILTRO: Vasculha a lista de eventos e guarda só os deste tema
  // Ele compara o ID do tema do evento com o ID da prateleira atual
  const eventosDestaPrateleira = eventos.filter(function(evento) {
    return evento.mini_card.id === temaAtual.id;
  });

  return (
    <section key={temaAtual.id} className="prateleira">
      
      
      <Tema tema={temaAtual} />

      
      <div className='lista-cards'>
        {eventosDestaPrateleira.map(function(eventoAtual) {
          return (
            // Agora sim passamos o evento correto! E usamos o seu novo ID como key.
            <Card key={eventoAtual.id} evento={eventoAtual} />
          );
        })}
      </div>
      
       </section>
  );
})}
</div>

      <section>
        
       {/* <EmCartazSection className='em-cartaz'/> AGUARDAR PRA USAR*/} 
      </section>
      <div></div>
    </main>
  )
}

export default App
