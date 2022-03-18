import React, { Component } from 'react';
import axios from 'axios'
class ClassTag extends Component {
    constructor(props){
        super(props)
        this.state = {
            mytext : ' mytext 초기 값 ',
            mytextjson : ' '
        }
    }
    componentDidMount = async() =>{
        const gettext = await axios.get('/getsend')
        this.setState({mytext : gettext.data})
        
        const getjson = await axios.get('/getsend/getjson')
        this.setState({mytextjson : getjson.data.url})

    }
    render() {
        return (
            <div>
                <h3>Class Tag  클래스형 컴퍼넌트</h3>
                <p>componentDidMount  this.setState   mytext : setstate 할당</p>
                <p>{this.state.mytext} 1</p>
                <p>{this.state.mytextjson} 2 </p>
            </div>
        );
    }
}

export default ClassTag;
