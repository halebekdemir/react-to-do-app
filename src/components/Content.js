import CardItem from "./Card-Item";


export function ToDo() {

  return(
    <div className="col-4">
      <h3 className="font-bagel">To Do</h3>
      <div className="grid">
        <CardItem sectionName="toDoItems"/>
      </div>
    </div>
  )
}

export function InProgress() {
  return(
    <div className="col-4">
      <h3 className="font-bagel">In Progress</h3>
      <div className="grid">
        <CardItem sectionName="inProgressItems"/>
      </div>
    </div>
  )
}

export function Done() {
  return(
    <div className="col-4">
      <h3 className="font-bagel">Done</h3>
      <div className="grid">
        <CardItem sectionName="doneItems"/>
      </div>
    </div>
  )
}


export default function Content() {

  return(
    <div className="container">
      <div className="row">
        <ToDo />
        <InProgress />
        <Done />
      </div>
    </div>
  )
}