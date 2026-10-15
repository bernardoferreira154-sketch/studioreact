import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <header className="cabecalho">
        <span className="logo">Studio Alfa</span>
        <nav>
          <ul className="menu">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a className="botao-contato" href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <h1>Criamos sites que funcionam</h1>
          <p>Layouts responsivos, rápidos e acessíveis para o seu negócio crescer na web.</p>
          <div className="acoes">
            <a className="botao botao-cheio" href="#contato">Peça um orçamento</a>
            <a className="botao botao-vazado" href="#servicos">Ver portfólio</a>
          </div>
        </section>

        <section className="servicos" id="servicos">
          <h2>Nossos serviços</h2>
          <div className="grade-cards">
            <article className="card">
              <h3>Design de interface</h3>
              <p>Telas claras, pensadas para quem vai usar.</p>
            </article>
            <article className="card">
              <h3>Responsividade</h3>
              <p>O mesmo site funcionando em qualquer tela.</p>
            </article>
            <article className="card">
              <h3>Performance</h3>
              <p>Páginas leves que carregam rápido.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="rodape" id="contato">
        <span>© 2026 Studio Alfa</span>
        <ul className="redes">
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="https://github.com">GitHub</a></li>
          <li><a href="mailto:contato@studioalfa.com">E-mail</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
