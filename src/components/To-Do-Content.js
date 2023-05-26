import { useState } from "react"

export function CardModal(props) {

  function closeModal() {
    props.handleCallback(false)
  }

  return(
    <div className={`modal fade ${props.showModal ? 'show' : ''}`} style={props.showModal ? {display: 'block'} : {} }  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tab-index="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export function CardItem({cardType}) {
  const [show,setShow] = useState(false);
  
  function Callback(childData) {
    setShow(childData);
  }

  function OpenModal() {
    setShow(!show);
  }

  return(
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className="card-link" onClick={OpenModal}>Edit</button>
        </div>
      </div>
      <CardModal showModal={show} handleCallback={Callback}/>
    </>
  )
}


export default function ToDoContent() {

  return(
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>To Do</h3>
          <div className="grid">
            <CardItem cardType="toDo"/>
          </div>
        </div>
        <div className="col-4">
          <h3>In Progress</h3>
          <div className="grid">
            <CardItem cardType="inProgress"/>
          </div>
        </div>
        <div className="col-4">
          <h3>Done</h3>
          <div className="grid">
            <CardItem cardType="done"/>
          </div>
        </div>
      </div>
    </div>
  )
}