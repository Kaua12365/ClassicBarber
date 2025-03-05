import Dashboard from "../../components/dashboard"
import MenuLateral from "../../components/menuLateral"
import "./index.scss"
import { Link } from "react-router-dom"

export default function Home() {
  const barbeiros = [
    {
      id: 1,
      nome: "Davi Brito",
      avaliacao: 4.8,
      endereco: "Rua das Flores, 123 - Centro",
      especialidade: "Degradê e Barba",
      imagem: "/assets/images/barbeiro1.svg",
    },
    {
      id: 2,
      nome: "Kalel Rodrigues",
      avaliacao: 4.7,
      endereco: "Av. Paulista, 1500 - Bela Vista",
      especialidade: "Cortes Clássicos",
      imagem: "/assets/images/barbeiro2.svg",
    },
    {
      id: 3,
      nome: "Kauã Sousa",
      avaliacao: 4.9,
      endereco: "Rua Augusta, 789 - Consolação",
      especialidade: "Cortes Modernos",
      imagem: "/assets/images/barbeiro3.svg",
    },
    {
        id: 4,
        nome: "Diego Dias",
        avaliacao: 4.9,
        endereco: "Rua Augusta, 789 - Consolação",
        especialidade: "Cortes Modernos",
        imagem: "/assets/images/barbeiro3.svg",
      },
  ]

  const cortesEmAlta = [
    {
      id: 1,
      nome: "Degradê Americano",
      popularidade: 85,
      imagem: "/assets/images/corte1.png",
    },
    {
      id: 2,
      nome: "Undercut",
      popularidade: 78,
      imagem: "/assets/images/corte2.png",
    },
    {
      id: 3,
      nome: "Corte Social",
      popularidade: 72,
      imagem: "/assets/images/corte3.png",
    },
  ]

  const dadosAgendamentos = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    values: [45, 60, 75, 68, 82, 90],
  }

  const renderizarGrafico = (dados) => {
    const maxValue = Math.max(...dados.values)

    return (
      <div className="grafico-barras">
        {dados.values.map((valor, index) => (
          <div key={index} className="barra-container">
            <div
              className="barra"
              style={{ height: `${(valor / maxValue) * 100}%` }}
              title={`${dados.labels[index]}: ${valor} agendamentos`}
            ></div>
            <div className="label">{dados.labels[index]}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="secao-home">

      <MenuLateral />
      <div className="conteudo-home">
        <h1>Dashboard</h1>

        <div className="cards-resumo">
          <div className="card-resumo">
            <div className="icone">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 16.5C21.3137 16.5 24 13.8137 24 10.5C24 7.18629 21.3137 4.5 18 4.5C14.6863 4.5 12 7.18629 12 10.5C12 13.8137 14.6863 16.5 18 16.5Z"
                  fill="#2980B9"
                />
                <path
                  d="M9 31.5C9 24.8726 13.0294 19.5 18 19.5C22.9706 19.5 27 24.8726 27 31.5"
                  stroke="#2980B9"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="info">
              <h3>Clientes</h3>
              <p className="numero">248</p>
              <p className="variacao positiva">+12% este mês</p>
            </div>
          </div>

          <div className="card-resumo">
            <div className="icone">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 1.125C9 0.50368 8.49632 0 7.875 0C7.25368 0 6.75 0.50368 6.75 1.125V2.25H4.5C2.01472 2.25 0 4.26472 0 6.75V9H36V6.75C36 4.26472 33.9853 2.25 31.5 2.25H29.25V1.125C29.25 0.50368 28.7463 0 28.125 0C27.5037 0 27 0.50368 27 1.125V2.25H9V1.125Z"
                  fill="#2980B9"
                />
                <path
                  d="M36 31.5V11.25H0V31.5C0 33.9853 2.01472 36 4.5 36H31.5C33.9853 36 36 33.9853 36 31.5Z"
                  stroke="#2980B9"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="info">
              <h3>Agendamentos</h3>
              <p className="numero">156</p>
              <p className="variacao positiva">+8% este mês</p>
            </div>
          </div>

          <div className="card-resumo">
            <div className="icone">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 4.5L22.5 13.5L31.5 15L24.75 22.5L27 31.5L18 27L9 31.5L11.25 22.5L4.5 15L13.5 13.5L18 4.5Z"
                  fill="#2980B9"
                />
              </svg>
            </div>
            <div className="info">
              <h3>Avaliações</h3>
              <p className="numero">4.8</p>
              <p className="variacao positiva">+0.2 este mês</p>
            </div>
          </div>

          <div className="card-resumo">
            <div className="icone">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM25.8023 13.5H21.9445C21.5578 11.3203 20.8641 9.27422 19.8984 7.59844C22.5492 8.34609 24.7219 10.6172 25.8023 13.5ZM18 5.625C19.3359 7.45312 20.3203 9.85312 20.8078 12.375H15.1922C15.6797 9.85312 16.6641 7.45312 18 5.625ZM6.32578 20.25C6.14766 19.5281 6.04688 18.7734 6.04688 18C6.04688 17.2266 6.14766 16.4719 6.32578 15.75H10.7016C10.6148 16.4859 10.5562 17.2359 10.5562 18C10.5562 18.7641 10.6148 19.5141 10.7016 20.25H6.32578ZM10.1977 22.5H14.0555C14.4422 24.6797 15.1359 26.7258 16.1016 28.4016C13.4508 27.6539 11.2781 25.3828 10.1977 22.5ZM14.0555 13.5H10.1977C11.2781 10.6172 13.4508 8.34609 16.1016 7.59844C15.1359 9.27422 14.4422 11.3203 14.0555 13.5ZM18 30.375C16.6641 28.5469 15.6797 26.1469 15.1922 23.625H20.8078C20.3203 26.1469 19.3359 28.5469 18 30.375ZM21.3328 22.5H14.6672C14.5664 21.7641 14.4938 21.0141 14.4938 20.25C14.4938 19.4859 14.5664 18.7359 14.6672 18H21.3328C21.4336 18.7359 21.5062 19.4859 21.5062 20.25C21.5062 21.0141 21.4336 21.7641 21.3328 22.5ZM19.8984 28.4016C20.8641 26.7258 21.5578 24.6797 21.9445 22.5H25.8023C24.7219 25.3828 22.5492 27.6539 19.8984 28.4016ZM25.2984 20.25C25.3852 19.5141 25.4438 18.7641 25.4438 18C25.4438 17.2359 25.3852 16.4859 25.2984 15.75H29.6742C29.8523 16.4719 29.9531 17.2266 29.9531 18C29.9531 18.7734 29.8523 19.5281 29.6742 20.25H25.2984Z"
                  fill="#2980B9"
                />
              </svg>
            </div>
            <div className="info">
              <h3>Visitas ao Site</h3>
              <p className="numero">1.2k</p>
              <p className="variacao positiva">+15% este mês</p>
            </div>
          </div>
        </div>

        <div className="secao-grid">
          <div className="secao-cortes-alta">
            <h2>Cortes em Alta</h2>
            <div className="lista-cortes">
              {cortesEmAlta.map((corte) => (
                <div key={corte.id} className="card-corte">
                  <div className="imagem-corte">
                    <img src={corte.imagem || "/placeholder.svg"} alt={corte.nome} />
                  </div>
                  <div className="info-corte">
                    <h3>{corte.nome}</h3>
                    <div className="barra-popularidade">
                      <div className="progresso" style={{ width: `${corte.popularidade}%` }}></div>
                    </div>
                    <p>{corte.popularidade}% de popularidade</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="secao-grafico">
            <h2>Agendamentos Mensais</h2>
            <Dashboard /> 
            <div className="container-grafico">{renderizarGrafico(dadosAgendamentos)}</div>
            
          </div>
        </div>

        <div className="secao-barbeiros">
          <h2>Nossos Barbeiros</h2>
          <div className="lista-barbeiros">
            {barbeiros.map((barbeiro) => (
              <div key={barbeiro.id} className="card-barbeiro">
                <div className="cabecalho-card">
                  <img src={barbeiro.imagem || "/placeholder.png"} alt={barbeiro.nome} />
                  <div className="info-barbeiro">
                    <h3>{barbeiro.nome}</h3>
                    <p className="especialidade">{barbeiro.especialidade}</p>
                    <div className="avaliacao">
                      <div className="estrelas">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(barbeiro.avaliacao) ? "estrela ativa" : "estrela"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="nota">{barbeiro.avaliacao}</span>
                    </div>
                  </div>
                </div>
                <div className="endereco">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 0C5.09 0 2.73 2.36 2.73 5.27C2.73 8.11 7.16 15.27 7.51 15.77C7.61 15.92 7.8 16 8 16C8.2 16 8.39 15.92 8.49 15.77C8.84 15.27 13.27 8.11 13.27 5.27C13.27 2.36 10.91 0 8 0ZM8 7.91C6.54 7.91 5.36 6.73 5.36 5.27C5.36 3.82 6.54 2.64 8 2.64C9.45 2.64 10.64 3.82 10.64 5.27C10.64 6.73 9.45 7.91 8 7.91Z"
                      fill="#555555"
                    />
                  </svg>
                  <p>{barbeiro.endereco}</p>
                </div>
                <Link to={`/agendamento?barbeiro=${barbeiro.id}`} className="btn-agendar">
                  Agendar Horário
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
