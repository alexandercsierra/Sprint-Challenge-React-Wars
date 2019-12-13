// import React from 'react'
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
  

// const Cards = (props) => {
//     const {charArr} = props;
//     // const characters = charArr.map(char => {
//     //     return (
//     //         // <h1>{char.name}</h1>
            
//     //     )
//     // }) 
//     return (
//         // <div>
//         // {characters}
//         // </div>
//         <Card style={{ width: '18rem' }}>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>
//     )
// }

// export default Cards


import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {
    const {charArr} = props;
    console.log(charArr)
    if (!charArr) {
        return <h1>Loading...</h1>
    } else {
  return (
     <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>

         {charArr.map(obj => {
             return(
                <Card style={{width: "20%", height: "250px", margin: "4%"}}>
        <CardBody style = {{display: "flex", flexDirection: "column", justifyContent: "center"}}>
             <CardTitle>{obj.name}</CardTitle>
          <CardSubtitle>Birth Year: {obj.birth_year}</CardSubtitle>
          <CardSubtitle>Height: {obj.height}</CardSubtitle>
          <CardSubtitle>Mass: {obj.mass}kg</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
             )
         })}
     </div>
    

  );}
};

export default Cards