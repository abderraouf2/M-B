
 import React, { Component } from 'react';
 import { addItems, storage } from '../lib/firebase';
 import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'


//  to list all images

//  listAll(imageListRef).then((response)=>{
//   response.items.forEach(item => {
//     getDownloadURL(item).then(url => {
//       console.log(url);
//       setImageList((prev) => [...prev, url])
//     })
//   })
// })

 class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl : '',
      name: '',
      price:0,
      description : ''
    }
    this.image = null;
    this.link = ''
  }
  
  render() {
    const uploadItems = async () =>{
      if ( this.state.name ==='' || this.state.price ==='' || this.state.description ==='' ) {
        console.log(typeof(this.state.price));
        console.log('fill in the empty space');
      }
      // Number.isInteger(this.state.price)
      // else if( /^[0-9]+$/.test(this.state.price) ){
      //   console.log('enter a valid number');
      // }
      else {
        const imageRef = ref(storage, `images/${this.state.name}/${this.image.name}`);
        await uploadBytes(imageRef, this.image).then(()=>{
          alert("image uploaded")
        })
        await addItems(this.state.name, this.state.imageUrl, this.state.price, this.state.description)
        console.log('item uploadded');}
    }
    return (
      <div>
        <input type="file" onChange={(e)=>(this.image = e.target.files[0]) } />
         <input type="text" onChange={(e)=>this.setState({name : e.target.value}) } placeholder='name' required />
          {
            console.log(this.state.name)
          }
          <input type="number" onChange={(e)=>this.setState({price :parseInt(e.target.value) }) } placeholder='price' required />
          {
            console.log(/^[0-9]+$/.test(this.state.price))
          }
          <input type="text" onChange={(e)=>this.setState({description : e.target.value})} placeholder='description' required />
          <button onClick={uploadItems}> upload Item </button>
      </div>
    );
  }
 };
 
 export default AddItem;