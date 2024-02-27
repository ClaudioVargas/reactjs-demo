import React, {useEffect, useState} from 'react'

import UsuarioModal from './usuario.modal';

//services
import { getUsers } from '../../services/libros.service';

const Usuarios = () => {
    // const url = 'http://api-usuarios.run'
    const [usuarios, setUsuarios] = useState([])

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const [modalTitle, setModalTitle] = useState('')
    const [dataFromChild, setDataFromChild] = useState(0);

    const handleDataFromChild = (data) => {
      setDataFromChild(data);
      console.log("dataFromChild", dataFromChild)
      if(dataFromChild === 0) {
        onGetUsers()
      }
    }


    useEffect( ()=>{
      onGetUsers()
    }, [] ) 

    const onGetUsers = async () =>{
      getUsers().then( (response)=>{
        setUsuarios(response.data)
      } )
    }

    const openModal = (method, id, name, username, email) => {
      console.log()
      setId(0)
      setName('')
      setUsername('')
      setEmail('')
      if(method === 'POST'){
        setModalTitle('Guardar usuario')
      } else {
        setModalTitle('Editar usuario')
        setId(id)
        setName(name)
        setUsername(username)
        setEmail(email)
      }
      
    }

    
  return (
    <div className='App'>
      <div className="container-fluid">
        <div className='row mt-2'>
          <div className='col-md-12 col-lg-8 offset-lg-2'>
            
        <div className='row mt-3'>
          <div className='col-md-4 offset-4'>
              <div className='d-grix mx-auto'>
                <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalUsuario' onClick={() => openModal('POST')}>
                  <i className='fa-solid fa-circle-plus'>  </i> Crear Usuario
                </button>
              </div>
          </div>
        </div>
            <table className='table table-bordered mt-1'>
              <thead>
                <tr> 
                  <th>#</th>
                  <th>Nombe</th>
                  <th>Username</th>
                  <th>Email</th> 
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  usuarios.map((usuario, id)=>(
                    <tr key={usuario.id}>
                      <td>{usuario.id}</td>
                      <td>{usuario.name}</td>
                      <td>{usuario.username}</td>
                      <td>{usuario.email}</td>
                      <td>
                        <button className='btn btn-warning mr-1' data-bs-toggle='modal' data-bs-target='#modalUsuario' onClick={() => openModal('PUT', usuario.id, usuario.name, usuario.username, usuario.email)}>
                          <i className='fa-solid fa-edit'></i>
                        </button>
                        
                        <button className='btn btn-danger'>
                          <i className='fa-solid fa-trash'></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <UsuarioModal 
        id={id}
        setId={setId}
        name={name} 
        setName={setName}
        username={username}
        setUsername={setUsername} 
        email={email} 
        setEmail={setEmail}
        modalTitle={modalTitle} 
        sendDataToParent={handleDataFromChild}
        ></UsuarioModal>
    </div>
  )
}

export default Usuarios
