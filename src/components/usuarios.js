import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';

//services
import { getUsers } from '../services/libros.service';

const Usuarios = () => {
    const url = 'http://api-usuarios.run'
    const [usuarios, setUsuarios] = useState([])
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const title = 'title test'

    useEffect( ()=>{
      onGetUsers()
    }, [] ) 

    const onGetUsers = async () =>{
      getUsers().then( (response)=>{
        console.log("response¨¨¨***", response)
        setUsuarios(response.data)
      } )
    }
  return (
    <div className='App'>
      <div className="container-fluid">
        <div className='row mt-2'>
          <div className='col-md-12 col-lg-8 offset-lg-2'>
            <table className='table table-bordered'>
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
                        <button className='btn btn-warning mr-1'>
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
        <div className='row mt-3'>
          <div className='col-md-4 offset-4'>
              <div className='d-grix mx-auto'>
                <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalUsuario'>
                  <i className='fa-solid fa-circle-plus'>  </i> Crear Usuario
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Modal  */}
      <div id="modalUsuario" className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
                <label className="h5">{title}</label>
                <button type="button" className='btn-close' data-bs-dismiss='modal' aria-label='close'>

                </button>
            </div>
            <div className='modal-body'>
              <input className='w-100' type="hidden" id='id'></input>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='fa-solid fa-gift'></i>
                </span>
                <input type="text" id='name' className='form-control' placeholder='Nombre' 
                value={name} 
                onChange={(e)=> setName(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='fa-solid fa-gift'></i>
                </span>
                <input type="text" id='username' className='form-control' placeholder='Username' 
                value={username} 
                onChange={(e)=> setUsername(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='fa-solid fa-gift'></i>
                </span>
                <input type="text" id='email' className='form-control' placeholder='Correo electronico' 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}></input>
              </div>
              <div className='d-grid col6 mx-auto'>
                
                <button className="bton btn-danger" data-ds-dismiss="modal">
                  <i className='fa-solid fa-close'></i>Cerrar
                </button>
                <button className="bton btn-success">
                  <i className='fa-solid fa-floppy-disk'></i>Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usuarios
