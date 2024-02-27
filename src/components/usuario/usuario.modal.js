import React from 'react'
import { show_alert } from '../../functions';
import axios from 'axios';



function UsuarioModal({id, setId, name, setName, username, setUsername, email, setEmail, modalTitle, sendDataToParent}) {

  // const [id, setId] = useState(0)
  // const [name, setName] = useState('')
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')

  
  const validateUsuario = () =>{
    var parametros
    if(name.trim() === ''){
      show_alert('El nombre no puede quedar vacio', 'warning')
      return 
    } 
    else if(username.trim() === '') {
      show_alert('El username no puede quedar vacio', 'warning')
      return 
    } else if(email.trim() === '') {
      show_alert('El email no puede quedar vacio', 'warning')
      return 
      
    } else {
      parametros = {id: id, name: name.trim(), username: username.trim(), email: email.trim()}
      
      enviarSolicitud(parametros)
    }
  }

  const enviarSolicitud = async(data) => {
    var method
    if(data.id === 0) {
      method = 'POST'
    } else {
      method = 'PUT'
    }
    const url = 'localhost:3000'
    console.log("method", method)
    console.log("data", data)
    await axios({method, url: url, data}).then( (response)=>{
      console.log("response", response)
      document.getElementById('btnClose').click()
      sendDataToParent(method);
      
    } )
    .catch((error)=>{
      // show_alert(error, 'error')
      
      // pruebas para guardado exitoso
      document.getElementById('btnClose').click()
      sendDataToParent(0); 

    })
  }
    return (
      <div id="modalUsuario" className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
                <label className="h5">{modalTitle}</label>
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
              <div className='row'>
                <div className='col-12'>
                  <button id="btnClose" className="btn btn-danger float-end" data-bs-dismiss="modal">
                    <i className='fa-solid fa-close'></i>Cerrar
                  </button>
        
                  <button className="btn btn-success float-end mr-2" onClick={()=>validateUsuario(1)}>
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

  export default UsuarioModal
