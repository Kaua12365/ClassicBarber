import axios from "axios";
import storage from "local-storage"
import MenuLateral from "../../components/menuLateral";
import "./index.scss";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Perfil() {
  const [id, setId] = useState(0)
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senhaAntiga, setSenhaAntiga] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [profileImage, setProfileImage] = useState("/assets/images/davi.svg")
  const [previewImage, setPreviewImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const User = storage('USUARIO')
    setId(User.id)
    setNome(User.nome)
    setEmail(User.email)
    
    async function buscarDadosUsuario() {
      try {
        if (!id) {
          setIsLoading(false)
          return
        }
        const url = `http://localhost:3002/usuario/?id=${id}`
        const response = await axios.get(url)

        if (response.data) {
          setNome(User.nome || "")
          setTelefone(User.telefone || "")
          setEmail(User.email || "")

          if (User.imagem) {
            setProfileImage(User.imagem)
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error)
        toast.error("Não foi possível carregar seus dados. Tente novamente mais tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    buscarDadosUsuario()
  }, [])

  async function AlterarPerfil() {
    try {
      if (!id) {
        toast.error("ID do usuário não encontrado.")
        return
      }
      const url = `http://localhost:3002/usuario/?id=${id}`
      const obj = {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
      }

      if (senha !== confirmarSenha) {
        toast.error("As senhas não coincidem.")
        return
      }

      const resp = await axios.put(url, obj)

      toast.success("Perfil atualizado com sucesso!")
    } catch (error) {
      console.error("Erro ao alterar perfil:", error)
      if (error.response) {
        toast.error(`Erro: ${error.response.data.message || "Erro ao alterar perfil"}`)
      } else {
        toast.error("Erro ao alterar perfil.")
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "nome") setNome(value)
    if (name === "telefone") setTelefone(value)
    if (name === "email") setEmail(value)
    if (name === "senha") setSenhaAntiga(value)
    if (name === "novaSenha") setSenha(value)
    if (name === "confirmarSenha") setConfirmarSenha(value)
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const imageUrl = URL.createObjectURL(file)
      setPreviewImage(imageUrl)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    AlterarPerfil()
    if (previewImage) {
      setProfileImage(previewImage)
      setPreviewImage(null)
    }
  }

  const handleCancel = () => {
    buscarDadosUsuario()
    setSenhaAntiga("")
    setSenha("")
    setConfirmarSenha("")
    setPreviewImage(null)
  }

  async function buscarDadosUsuario() {
    try {
      if (!id) return

      const url = `http://localhost:3002/usuario/?id=${id}`
      const response = await axios.get(url)

      if (response.data) {
        const User = storage('USUARIO')
        setNome(User.nome || "")
        setTelefone(User.telefone || "")
        setEmail(User.email || "")
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="secao-perfil">
        <MenuLateral />
        <div className="conteudo-perfil">
          <h1>Configurações de Perfil</h1>
          <div className="carregando">Carregando dados...</div>
        </div>
      </div>
    )
  }


  return (
    <div className="secao-perfil">
      <MenuLateral />
      <div className="conteudo-perfil">
        <h1>Configurações de Perfil</h1>

        <div className="perfil-container">
          <div className="foto-perfil">
            <div className="imagem-container">
              <img src={previewImage || profileImage} alt="Foto de perfil" className="foto-usuario" />
              <div className="editar-foto">
                <label htmlFor="upload-foto" className="btn-editar-foto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <input
                  type="file"
                  id="upload-foto"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <p className="nome-usuario">{nome || "Usuário"}</p>
          </div>

          <div className="formulario-perfil">
            <form onSubmit={handleSubmit}>
              <div className="campo-form">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={nome} onChange={handleInputChange} required />
              </div>

              <div className="campo-form">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={telefone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="campo-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
              </div>

              <div className="secao-senha">
                <h2>Alterar Senha</h2>

                <div className="campo-form">
                  <label htmlFor="senha">Senha Atual</label>
                  <input type="password" id="senha" name="senha" value={senhaAntiga} onChange={handleInputChange} />
                </div>

                <div className="campo-form">
                  <label htmlFor="novaSenha">Nova Senha</label>
                  <input type="password" id="novaSenha" name="novaSenha" value={senha} onChange={handleInputChange} />
                </div>

                <div className="campo-form">
                  <label htmlFor="confirmarSenha">Confirmar Nova Senha</label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    value={confirmarSenha}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="botoes-form">
                <button type="button" className="btn-cancelar" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn-salvar">
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}