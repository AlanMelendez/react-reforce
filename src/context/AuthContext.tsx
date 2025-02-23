import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";


// 1.Un enum es un tipo de dato que permite definir un conjunto de constantes.
// En este caso, AuthStatus es un conjunto de constantes que representan el estado de autenticación.
enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unauthenticated' = 'unauthenticated'
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking?: boolean;
    isAuthenticated?: boolean;
    loginWithEmailPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}


/* 2.
    createContext es una función que permite crear un contexto global.
    createContext recibe un valor por defecto, en este caso un objeto vacío.
    createContext devuelve un objeto con dos propiedades: Provider y Consumer.
    "Provider" es un componente que permite envolver la aplicación y compartir el contexto.
*/
export const AuthContext = createContext({} as AuthState);

// 3.
//Como un servicio en Angular, sirve para consumir el contexto en cualquier parte de la aplicación.
// useContext es un hook que permite consumir un contexto. (terminos de react)
export const useAuthContext = () => useContext(AuthContext);

// 4.
// Children es un tipo de dato que permite recibir cualquier tipo de componente.
export const AuthProvider = ({ children }: PropsWithChildren) => {

    // 5.
    // Permite crear un contexto global, en angular sería un SubjecttBehavior.
    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    // 6.
    // Simulando una petición a un servidor.
    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated);
        }, 1500);
    }, []);

    const loginWithEmailPassword = (email: string, password: string) => {
        // Simulando una petición a un servidor.
        setTimeout(() => {
            setUser({
                name: 'John Doe',
                email: email
            });
            setStatus(AuthStatus.authenticated);
        }, 1500);
    };

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.unauthenticated);
    };

    return (

        /*
            7.
             Permite envolver la aplicación y compartir el contexto con los componentes hijos.
                value es el valor que se comparte con los componentes hijos.
                status es el estado de autenticación.
                isChecking es un booleano que indica si se está verificando la autenticación.

            Los componentes hijos pueden consumir el contexto con el hook useAuthContext.
            Y quienes son los hijos? los componentes que estén dentro de AuthProvider. (En este caso, el componente App)
        */
        <AuthContext.Provider 
            value={{
            status: status,
            user: user,

            //getters
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,

            //actions
            loginWithEmailPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )

};