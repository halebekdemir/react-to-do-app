import Modal from "./Modal";
import { useState, useEffect } from "react";
import {v1 as uuid} from "uuid"; 

export default function CardItem({cardType}) {
  const [list,setList] = useState(JSON.parse(localStorage.getItem('toDoItems')) || []);
  const [modalStatus,setModalStatus] = useState(false);
  const [modalContent,setModalContent] = useState();
  const [modalType,setModalType] = useState('');
  let listItems = [];

  useEffect(() => {
    localStorage.setItem('toDoItems',JSON.stringify(list));
  }, [list]);

  if(list != null && list.length > 0 ) {
    listItems = list.map((card) => {
      return (
        <div className="card" key={card.id}>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.desc}</p>
            <button type="button" className="card-link" onClick={(e) => OpenModal(e,'edit',card)}>Edit</button>
          </div>
        </div>
      )
    })
  }
  
  function CloseCallback(content,closeStatus) {
    if(closeStatus) {
      if(modalType == 'add') {
        setList([
          ...list,
          content
        ])
      }
      else {
        let myList;
        myList = list.map(item => {
          if(item.id == content.id) {
            item.title = content.title;
            item.desc = content.desc;
          }
          return item;
        })
        setList([...myList]);
      }
    }
    setModalContent(content);
    setModalStatus(false);
  }

  function OpenModal(e,modalType,cardInfo={title:'',desc:'',id: uuid()}) {
    setModalStatus(true);   
    setModalContent(cardInfo);
    setModalType(modalType);
  }

  return(
    <>
      {listItems}
      <button onClick={(e) => OpenModal(e,'add')}>Add</button>
      {modalStatus && 
        <Modal showModal={modalStatus} content={modalContent} type={modalType} onCallback={CloseCallback}  />
      }
    </>
  )
}