import "./index.scss"
import { Link, useLocation } from "react-router-dom"
import storage from "local-storage";
import { useState, useEffect } from "react"
import axios from "axios";
import toast from "react-hot-toast";

export default function Cabecalho() {
  const [id, setId] = useState();
  const [menuSelecionado, setMenuSelecionado] = useState("home");
  const [nome, setNome] = useState("");
  const [profileImage, setProfileImage] = useState("/assets/images/davi.svg");
  const [previewImage, setPreviewImage] = useState(null);
  const location = useLocation();

  function clearLocalStorage() {
    localStorage.clear();
  }

  useEffect(() => {
    const User = storage("USUARIO");
    const path = location.pathname;
    setId(User.id);
    setProfileImage(User.imagem || "/assets/images/davi.svg");

    async function buscarDadosUsuario() {
      try {
        const url = `http://localhost:3002/usuario/?id=${id}`;
        const response = await axios.get(url);

        if (response.data) {
          setNome(User.nome || "");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        toast.error("Não foi possível carregar seus dados. Tente novamente mais tarde.");
      }
    }

    buscarDadosUsuario();

    if (path.includes("/home")) {
      setMenuSelecionado("home");
    } else if (path.includes("/servicos")) {
      setMenuSelecionado("servicos");
    } else if (path.includes("/agendamento")) {
      setMenuSelecionado("agendamento");
    } else if (path.includes("/perfil")) {
      setMenuSelecionado("perfil");
    }
  }, [location]);

  function selecionarMenu(menu) {
    setMenuSelecionado(menu);
  }

  function verificarMenuSelecionado(menu) {
    if (menu === menuSelecionado) return "selecionado";
    else return "";
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);

      const formData = new FormData();
      formData.append('img', file);
      formData.append('id', id);

      axios.post('http://localhost:3002/multer', formData)
        .then((response) => {
          const { fl, og } = response.data;
          const imagePath = `http://localhost:3002/img/${fl}`;

          setProfileImage(imagePath);

          const User = storage('USUARIO');
          const updatedUser = { ...User, imagem: imagePath };
          storage('USUARIO', updatedUser);

          toast.success("Imagem de perfil atualizada com sucesso!");
        })
        .catch((error) => {
          console.error('Erro ao enviar a imagem:', error);
          toast.error('Erro ao atualizar a imagem de perfil.');
        });
    }
  };

  return (
    <nav className="side-menu">
      <div className="profile-user">
        <img src={previewImage || profileImage} alt="Foto de perfil" className="foto-usuario" />
        <h1 style={{ textTransform: "capitalize" }} >{nome}</h1>
      </div>
      <div className="pages">
        <Link to="/home">
          <div onClick={() => selecionarMenu("home")} className={verificarMenuSelecionado("home")}>
            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.591 3.37507C18.7123 2.4964 17.2877 2.49639 16.409 3.37507L1.4545 18.3296C1.01517 18.7689 1.01517 19.4812 1.4545 19.9206C1.89384 20.3599 2.60616 20.3599 3.0455 19.9206L18 4.96606L32.9545 19.9206C33.3938 20.3599 34.1062 20.3599 34.5455 19.9206C34.9848 19.4812 34.9848 18.7689 34.5455 18.3296L29.25 13.0341V5.62507C29.25 5.00375 28.7463 4.50007 28.125 4.50007H25.875C25.2537 4.50007 24.75 5.00375 24.75 5.62507V8.53408L19.591 3.37507Z" />
              <path d="M18 7.40908L31.5 20.9091V30.3751C31.5 32.239 29.989 33.7501 28.125 33.7501H7.875C6.01104 33.7501 4.5 32.239 4.5 30.3751V20.9091L18 7.40908Z" />
            </svg>
            <a>Página Inicial</a>
          </div>
        </Link>
        <Link to="/servicos">
          <div onClick={() => selecionarMenu("servicos")} className={verificarMenuSelecionado("servicos")}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 17.7333L10.7227 20.5518C9.83672 20.2022 8.88047 20.0166 7.875 20.0166C3.52266 20.0166 0 23.5915 0 28.0083C0 32.4252 3.52266 36 7.875 36C12.2273 36 15.75 32.4252 15.75 28.0083C15.75 26.988 15.5602 26.0175 15.2227 25.1185L18 22.3L20.7773 25.1185C20.4328 26.0175 20.25 26.988 20.25 28.0083C20.25 32.4252 23.7727 36 28.125 36C32.4773 36 36 32.4252 36 28.0083C36 23.5915 32.4773 20.0166 28.125 20.0166C27.1195 20.0166 26.1633 20.2093 25.2773 20.5518L5.4 0.379959C4.90078 -0.126656 4.09922 -0.126656 3.6 0.379959C1.61016 2.39928 1.61016 5.66731 3.6 7.68664L13.5 17.7333ZM24.0891 16.1207L32.4 7.68664C34.3898 5.66731 34.3898 2.39928 32.4 0.379959C31.9008 -0.126656 31.0992 -0.126656 30.6 0.379959L19.5891 11.554L24.0891 16.1207ZM7.875 31.4333C7.43179 31.4333 6.99292 31.3447 6.58344 31.1726C6.17397 31.0005 5.80191 30.7482 5.48851 30.4302C5.17512 30.1121 4.92652 29.7346 4.75691 29.319C4.5873 28.9035 4.5 28.4581 4.5 28.0083C4.5 27.5585 4.5873 27.1132 4.75691 26.6976C4.92652 26.2821 5.17512 25.9045 5.48851 25.5865C5.80191 25.2684 6.17397 25.0162 6.58344 24.844C6.99292 24.6719 7.43179 24.5833 7.875 24.5833C8.31821 24.5833 8.75708 24.6719 9.16656 24.844C9.57603 25.0162 9.94809 25.2684 10.2615 25.5865C10.5749 25.9045 10.8235 26.2821 10.9931 26.6976C11.1627 27.1132 11.25 27.5585 11.25 28.0083C11.25 28.4581 11.1627 28.9035 10.9931 29.319C10.8235 29.7346 10.5749 30.1121 10.2615 30.4302C9.94809 30.7482 9.57603 31.0005 9.16656 31.1726C8.75708 31.3447 8.31821 31.4333 7.875 31.4333ZM24.75 28.0083C24.75 27.5585 24.8373 27.1132 25.0069 26.6976C25.1765 26.2821 25.4251 25.9045 25.7385 25.5865C26.0519 25.2684 26.424 25.0162 26.8334 24.844C27.2429 24.6719 27.6818 24.5833 28.125 24.5833C28.5682 24.5833 29.0071 24.6719 29.4166 24.844C29.826 25.0162 30.1981 25.2684 30.5115 25.5865C30.8249 25.9045 31.0735 26.2821 31.2431 26.6976C31.4127 27.1132 31.5 27.5585 31.5 28.0083C31.5 28.4581 31.4127 28.9035 31.2431 29.319C31.0735 29.7346 30.8249 30.1121 30.5115 30.4302C30.1981 30.7482 29.826 31.0005 29.4166 31.1726C29.0071 31.3447 28.5682 31.4333 28.125 31.4333C27.6818 31.4333 27.2429 31.3447 26.8334 31.1726C26.424 31.0005 26.0519 30.7482 25.7385 30.4302C25.4251 30.1121 25.1765 29.7346 25.0069 29.319C24.8373 28.9035 24.75 28.4581 24.75 28.0083Z" />
            </svg>
            <a>Nossos Serviços</a>
          </div>
        </Link>
        <Link to="/agendamento">
          <div onClick={() => selecionarMenu("agendamento")} className={verificarMenuSelecionado("agendamento")}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1.125C9 0.50368 8.49632 0 7.875 0C7.25368 0 6.75 0.50368 6.75 1.125V2.25H4.5C2.01472 2.25 0 4.26472 0 6.75V9H36V6.75C36 4.26472 33.9853 2.25 31.5 2.25H29.25V1.125C29.25 0.50368 28.7463 0 28.125 0C27.5037 0 27 0.50368 27 1.125V2.25H9V1.125Z" />
              <path d="M36 31.5V11.25H0V31.5C0 33.9853 2.01472 36 4.5 36H31.5C33.9853 36 36 33.9853 36 31.5ZM21.375 15.75H23.625C24.2463 15.75 24.75 16.2537 24.75 16.875V19.125C24.75 19.7463 24.2463 20.25 23.625 20.25H21.375C20.7537 20.25 20.25 19.7463 20.25 19.125V16.875C20.25 16.2537 20.7537 15.75 21.375 15.75ZM28.125 15.75H30.375C30.9963 15.75 31.5 16.2537 31.5 16.875V19.125C31.5 19.7463 30.9963 20.25 30.375 20.25H28.125C27.5037 20.25 27 19.7463 27 19.125V16.875C27 16.2537 27.5037 15.75 28.125 15.75ZM4.5 23.625C4.5 23.0037 5.00368 22.5 5.625 22.5H7.875C8.49632 22.5 9 23.0037 9 23.625V25.875C9 26.4963 8.49632 27 7.875 27H5.625C5.00368 27 4.5 26.4963 4.5 25.875V23.625ZM12.375 22.5H14.625C15.2463 22.5 15.75 23.0037 15.75 23.625V25.875C15.75 26.4963 15.2463 27 14.625 27H12.375C11.7537 27 11.25 26.4963 11.25 25.875V23.625C11.25 23.0037 11.7537 22.5 12.375 22.5Z" />
            </svg>
            <a>Agendamentos</a>
          </div>
        </Link>
        <Link to="/perfil">
          <div onClick={() => selecionarMenu("perfil")} className={verificarMenuSelecionado("perfil")}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.75 13.5C24.75 17.2279 21.7279 20.25 18 20.25C14.2721 20.25 11.25 17.2279 11.25 13.5C11.25 9.77208 14.2721 6.75 18 6.75C21.7279 6.75 24.75 9.77208 24.75 13.5Z" />
              <path d="M4.5 0C2.01472 0 0 2.01472 0 4.5V31.5C0 33.9853 2.01472 36 4.5 36H31.5C33.9853 36 36 33.9853 36 31.5V4.5C36 2.01472 33.9853 0 31.5 0H4.5ZM31.5 2.25C32.7426 2.25 33.75 3.25736 33.75 4.5V31.5C33.75 32.7426 32.7426 33.75 31.5 33.75V31.5C31.5 29.25 29.25 22.5 18 22.5C6.75 22.5 4.5 29.25 4.5 31.5V33.75C3.25736 33.75 2.25 32.7426 2.25 31.5V4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H31.5Z" />
            </svg>
            <a>Perfil</a>
          </div>
        </Link>
      </div>
      <Link to="/" className="logo" onClick={clearLocalStorage}>
        <img src="/assets/images/grupo6.svg" alt="Logo" />
      </Link>
    </nav>
  )
}