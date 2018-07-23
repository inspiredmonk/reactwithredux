import React,{ Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedListCount extends Component{
  constructor(){
    super();
  }
  
  render(){
    console.log(this.props.articles.length);
    return(
      <div>
          <p>{this.props.articles.length}</p>
      </div>
    );
  }
}

const ListCount = connect(mapStateToProps)(ConnectedListCount);

ConnectedListCount.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ListCount;
