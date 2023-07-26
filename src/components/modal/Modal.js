import { useState } from "react";

export default function Modal(props) {
  console.log("props",props)
  const [modalContent,setModalContent] = useState(props.content);

  function handleChange(event) {
    setModalContent({
      ...modalContent,
      [event.target.name]: event.target.value 
    })
  }

  function handleSaveClick() {
    props.onCallback(modalContent,true);
  }
  
  function handleCloseClick() {
    props.onCallback('',false)
  }

  return(
    <div className={`modal ${props.showModal ? '-show' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tab-index="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.type === 'edit' ? 'Edit Existing Item' : 'Add Item'}
            </h1>
          </div>
          <div className="modal-body">
          <form>
          <div className="row mb-3">
            <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
            <div className="col-sm-9">
              <input type="text" value={modalContent.title} name="title" className="form-control" id="title" onChange={handleChange} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
            <div className="col-sm-9">
              <input type="text" value={modalContent.desc} name="desc" className="form-control" id="description" onChange={handleChange} />
            </div>
          </div>
          </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseClick}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSaveClick}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}