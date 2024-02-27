import React, {useEffect, useState} from 'react'
import { show_alert } from '../../functions';
import axios from 'axios';



function UsuarioModal({id, setId, name, setName, username, setUsername, email, setEmail, modalTitle, sendDataToParent}) {

  // const [id, setId] = useState(0)
  // const [name, setName] = useState('')
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')

  
  const validateUsuario = (op) =>{
    console.log(op)
    console.log("name", name)
    sendDataToParent(op);
    // var parametros
    // var method
    // if(name.trim() === ''){
    //   show_alert('El nombre no puede quedar vacio', 'warning')
    // } else if(username.trim() === '') {
    //   show_alert('El username no puede quedar vacio', 'warning')
    // } else if(email.trim() === '') {
    //   show_alert('El email no puede quedar vacio', 'warning')
      
    // } else {
    //   parametros = {name: name.trim(), username: username.trim(), email: email.trim()}
    //   if(op === 1) {
    //     method = 'POST'
    //   } else {
    //     method = 'PUT'
    //   }
    //   enviarSolicitud(method, parametros)
    // }
  }

  const enviarSolicitud = async(method, data, url) => {
    await axios({method, url: url, data}).then( (response)=>{
      console.log("response", response)
      document.getElementById('btnClose').click()
      
    } )
    .catch((error)=>{
      show_alert(error, 'error')
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
                  <button id="btnClose" className="btn btn-danger float-end" data-ds-dismiss="modal">
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
