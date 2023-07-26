import CardItem from "./Card-Item";


export function ToDo() {

  return(
    <div className="section">
      <h3 className="section__title">To Do</h3>
      <div className="section__content">
        <CardItem sectionName="toDoItems"/>
      </div>
    </div>
  )
}

export function InProgress() {
  return(
    <div className="section">
      <h3 className="section__title">In Progress</h3>
      <div className="section__content">
        <CardItem sectionName="inProgressItems"/>
      </div>
    </div>
  )
}

export function Done() {
  return(
    <div className="section">
      <h3 className="section__title">Done</h3>
      <div className="section__content">
        <CardItem sectionName="doneItems"/>
      </div>
    </div>
  )
}


export default function Content() {

  return(
    <>
      <ToDo />
      <InProgress />
      <Done />
    </>
  )
}