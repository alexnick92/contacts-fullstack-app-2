// import React, { useState } from "react";
// import { render } from "react-dom";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Input,
//   Label,
// } from "reactstrap";

// function CustomModal() {
//     const[activeItem, setActiveItem] = useState({activeItem})

//     const handleChange = e => {
//         let { name, value } = e.target;

//         if (e.target.type === "checkbox") {
//             value = e.target.checked;
//         }
//         const activeItem = {...activeItem, [name]: value}

//         {activeItem}
//     };
// }

// render() {
// return (
//     <Modal isOpen={true} toggle={toggle}>
//         <ModalHeader toggle={toggle} > Add Contacts </ModalHeader>
//         <ModalBody>
//             <Form>
//                 <FormGroup>
//                     <Label for="contacts-title" >Name</Label>
//                     <Input 
//                         type="text"
//                         id="contacts-title"
//                         name="title"
//                         value={activeItem.title}
//                         onChange={handleChange}
//                         placeholder="Enter Name"
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="contact-number">Phone Number</Label>
//                     <Input 
//                         type="text"
//                         id="contact-number"
//                         name="number"
//                         value={activeItem.}
//                         onChange={handleChange}
//                         placeholder="Enter Phone Number"

//                     />
//                 </FormGroup>
//                 {/* <FormGroup check>
//                 <Label check>
//                     <Input 
//                         type="check"
//                     />
//                 </Label>

//                 </FormGroup> */}
//             </Form>
//         </ModalBody>

//         <ModalFooter>
//             <Button
//                 color="success"
//                 onClick={() => onmouseleave({activeItem})}
//             >
//                 Save
//             </Button>
//         </ModalFooter>
//     </Modal>
//         );
//             }

