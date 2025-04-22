const url = import.meta.env.VITE_SUPABASE_URL

const Entorno = () => {
  return (
    <div>
      Esta es la direccion donde hay que hacer la consulta : 
      <a href={url} target="_blanck" >{url}</a>
    </div>
  )
}

export default Entorno
