import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    // update that fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // update the state
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <form className="fish-edit">
        <input
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
          type="text"
          placeholder="name"
        />
        <input
          name="price"
          type="text"
          placeholder="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="soldout">Sold Out</option>
        </select>
        <textarea
          name="desc"
          type="textarea"
          placeholder="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          type="text"
          placeholder="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </form>
    );
  }
}

export default EditFishForm;
