import React from 'react';
import {ManagementWorkListUI} from '../../containers/Work';

export default class ManagementWorkList extends React.Component{
  constructor(props){
    super(props);
    this.state={
        visible: false
    }
  }
  showDrawer = () => {
      this.setState({
          visible: true,
      });
  };

  onClose = () => {
      this.setState({
          visible: false,
      });
  };

  render(){
    return <ManagementWorkListUI 
              visible={this.state.visible}
              showDrawer={this.showDrawer}
              onClose={this.onClose} 
            />
  }
}