import React from 'react'
import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const { isChecking, isAuthenticated, loginWithEmailPassword,logout,user } = useAuthContext();

    // if(isChecking) return <span>Loading...</span>

    return (
        <>
            { isAuthenticated ? (
                <>
                    <h3>Bienvenido!!!!</h3>

                    <h4>Usuario: </h4>
                    <pre>
                        {JSON.stringify(user, null, 2)}
                    </pre>


                    <button onClick={() => logout()}>Cerrar sesión</button>
                </>
            ) : ( 
                <>
                    <h3>Por favor, inicia sesión</h3>
                    <button onClick={() => loginWithEmailPassword('alan','password')}>Iniciar sesión</button>
                </>
            )}
        </>
    );
    
    
}
