import React,{ Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {removeArticle} from "../actions/index";


const mapDispatchToProps = dispatch => {
  return {
    removeArticle: articleId => dispatch(removeArticle(articleId))
  };
};

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends Component{
  constructor(){
    super();
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event){
    event.preventDefault();
    const articeId = event.target.id;
    this.props.removeArticle(articeId);
  }
  
//const ConnectedList = ({ articles }) => (
  render(){
    console.log(this.props.articles);
    return(
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
            <button id={el.id} onClick={this.handleRemove}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
//);
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
  //removeArticle: PropTypes.func.isRequired
};

export default List;
