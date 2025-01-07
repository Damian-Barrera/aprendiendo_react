import { useEffect, useState } from "react"
import { app, auth, provider } from "../config/fireconfig"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth"
import { doc, getFirestore, setDoc } from '@firebase/firestore'

const Login = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usuario, setUsuario] = useState(null)
    const [mail, setMail] = useState(null)
    const [userId, setUserId] = useState(null)

    const db = getFirestore(app)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuario autenticado:", user);
                console.log(user.uid)
                setMail(user.email)
                setUsuario(true)
            } else {
                console.log("Usuario no autenticado");
            }
        }, []);

        // Limpiar el listener cuando el componente se desmonte
        return () => unsubscribe();
    }, []);  // Dependencias vacías para que solo se ejecute una vez


    const limpiarFormulario = () => {
        setNombre('')
        setApellido('')
        setEmail('')
        setPassword('')
    }

    const handleEmailSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user

            console.log(nombre, apellido, email, user.uid)
            setUserId(user.uid)
            console.log(userId)

            const docRef = doc(db, 'informacion', user.uid)
            await setDoc(docRef, { nombre, apellido, email })


            await sendEmailVerification(user);
            console.log("Correo de verificación enviado")

            limpiarFormulario();

        } catch (error) {
            console.log(error)
            console.log(error.code)
        }
    }

    const handleGoogleSignUp = async () => {

        try {
            await signInWithPopup(auth, provider)
            limpiarFormulario();
            console.log('Inicio correctamente')

        } catch (error) {
            console.log('Fallo el inicio de sesion')
            console.log(error)

        }

    }
    const handleIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const usuario = userCredential.user
            console.log(usuario)
            console.log('Este usuario se autentico' + ' ' + usuario.emailVerified)
            limpiarFormulario()

        } catch (error) {
            console.log(error)
            console.log(error.code)
        }
    }

    const handleOut = async () => {
        await signOut(auth)
        window.location.reload();
    }





    return (
        <>
            <h1> {usuario ? 'Hay usuario logeado' : 'Ningun usuario Logeado'} </h1>
            <div className="card ps-2 mb-5 bg-secondary text-light">
                {usuario ? 'Bienvenid@' + ' ' + mail : 'Ningun user activo'}
            </div>
            <form >
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                    <label htmlFor="floatingPassword">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
                    <label htmlFor="floatingPassword">Apellido</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary mt-3 me-3" onClick={handleEmailSignUp}>Registrarse</button>
                <button type="button" className="btn btn-success mt-3" onClick={handleGoogleSignUp} >Registrarte con Google</button>
                <button type="button" className="btn btn-secondary mt-3 ms-3" onClick={handleIn}> Ingresar con correo</button>
                <button type="button" className="btn btn-danger mt-3 ms-3" onClick={handleOut}> Cerrar Sesión</button>
            </form>
        </>
    )
}

export default Login
