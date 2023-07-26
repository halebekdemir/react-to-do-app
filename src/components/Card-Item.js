import Modal from "./modal/Modal";
import { useState, useEffect } from "react";
import {v1 as uuid} from "uuid"; 

export default function CardItem({sectionName}) {
  
  const [cardItems,setCardItems] = useState(JSON.parse(localStorage.getItem(sectionName)) || []);
  
  const [modalStatus,setModalStatus] = useState(false);
  const [modalContent,setModalContent] = useState();
  const [modalType,setModalType] = useState('');

  let listItems = [];

  useEffect(() => {
    localStorage.setItem(sectionName,JSON.stringify(cardItems));
  }, [cardItems,sectionName]);

  if(cardItems != null && cardItems.length > 0 ) {
    listItems = cardItems.map((card) => {
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
      if(modalType === 'add') {
        setCardItems([...cardItems,content]);
      }
      else {
        let myList = cardItems.map(item => {
          if(item.id === content.id) {
            item.title = content.title;
            item.desc = content.desc;
          }
          return item;
        })
        setCardItems([...myList]);
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