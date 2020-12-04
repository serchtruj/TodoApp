import {ListGroup, Button, Accordion, Card, Row, Container, Col} from 'react-bootstrap'

export default function ChildList (props) {
  return(
    <Container>
      <Row>
          {props.taskList.map((task, index) => (
            <Col md={6} key={index} className="p-1">
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="d-flex flex-wrap">
                      <Col md={12} lg={4} xs={12} >
                        <h4 className="text-dark">{task.name}</h4>
                      </Col>
                      <Col md={12} lg={8} xs={12} className="d-flex justify-content-lg-end justify-content-md-between p-0">
                        <Button size="sm" className="mx-2" variant="danger" onClick={() => props.handleDelete(index)}>Delete</Button>
                        <Button size="sm" className="mx-2" variant="secondary" onClick={() => props.handleEdit(index, task.name)}>Edit</Button>
                        <Button size="sm" className="mx-2" variant="info" onClick={() => props.handleAddSub(index)}>Add subtask</Button>
                      </Col>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <SubChild 
                        parentIndex={index} 
                        subList={task.subTask} 
                        handleSubDel={props.handleDelete} 
                        handleSubEdit={props.handleEdit}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
  
function SubChild(props){
  return(
  <Container>
    <Row>
      <ListGroup className="w-100">
        {props.subList.map((task, index)=> (
          <ListGroup.Item key={index} className="d-flex flex-wrap">
            <Col md={12} lg={4} xs={12}>
              <h5 className="text-dark">{task.name}</h5>
            </Col>
            <Col md={12} lg={8} xs={12} className="d-flex justify-content-lg-end justify-content-md-between p-0">
              <Button size="sm" className="mx-2" variant="danger" onClick={() => props.handleSubDel(index, props.parentIndex)}>Delete</Button>
              <Button size="sm" className="mx-2" variant="secondary" onClick={() => props.handleSubEdit(index, task.name, props.parentIndex)}>Edit</Button>
            </Col>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  </Container>
  )
}
