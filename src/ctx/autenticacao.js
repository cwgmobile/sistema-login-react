import React, { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider =({children}) =>{
    const [usuarioLogado, setUsuarioLogado] = useState();
    const entrar = (email,password) => {
		axios
			.post("http://localhost:8000/login", {
				email: email,
				senha: password,
			})
			.then((retorno) => {
				if (retorno.data.erro) {
					alert(retorno.data.erro);
				} else {
					console.log(retorno);
				}
			})
			.catch((erro) => {
				console.log(erro);
		});
	};
    return (
        <AuthContext.Provider value={{entrar:(email,password) => entrar(email,password),usuarioLogado, }}>
          {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;