import React from "react";

const propTypes = {};

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    //reset the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="soldout">Sold Out</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          type="textarea"
          placeholder="desc"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

AddFishForm.propTypes = propTypes;

export default AddFishForm;
