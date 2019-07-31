import React from 'react';
import '../less/count.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';

class Count extends React.Component{

  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.PCshowRate()
    this.props.PCShowMedel()
  }
  render(){
    return(
      <div className="personCenter-count">
        <div className="personCenter-count-title">
          <p id="personCenter-count">刷题量</p>
        </div>
        <div className="module">

              <div className="personCenter-competition">
              <div className="module-title">
                <img className="module-icon" src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%BB%83%E4%B9%A0.png"></img>
                <span>参加的练习</span>
              </div>
              <div className="module-details">
                <div className="module-right">
                  <img src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E6%AD%A3%E7%A1%AE.png"></img>
                  <span>{this.props.rightPercent}</span>
                </div>
                <div className="module-wrong">
                  <img src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%94%99%E8%AF%AF.png"></img>
                  <span>{this.props.wrongPercent}</span>
                </div>
              </div>
            </div>

            <div className="personCenter-practice">
              <div className="module-title">
                <img className="module-icon" src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E6%AF%94%E8%B5%9B-1.png"></img>
                <span>参加的比赛</span>
              </div>
              <div className="module-details">
                <div className="module-gold">
                  <img src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%87%91%E7%89%8C.png"></img>
                  <span>{this.props.gold}</span>
                </div>
                <div className="module-silver">
                  <img src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%93%B6%E7%89%8C.png"></img>
                  <span>{this.props.silver}</span>
                </div>
                <div className="module-copper">
                  <img src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%93%9C%E7%89%8C.png"></img>
                  <span>{this.props.copper}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    rightPercent: state.getIn(['home','rightPercent']),
    wrongPercent: state.getIn(['home','wrongPercent']),
    gold: state.getIn(['home','gold']),
    silver: state.getIn(['home','silver']),
    copper: state.getIn(['home','copper'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    PCshowRate(){
      dispatch(actionCreators.PracticeRate())
    },
    PCShowMedel(){
      dispatch(actionCreators.CompetitionMedel())
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);