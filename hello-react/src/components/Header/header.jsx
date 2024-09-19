import React from 'react'
import PropTypes from 'prop-types';
import './header.css'

// export default class Header extends Component {

//     static propTypes = {
//         code: PropType.func.isRequired
//     }


//     handleKeyUp = (event) => {
//         const { target, keyCode } = event
//         //keyCode:是键盘点击的那一个键值，13代表着回车2
//         //判断是否是回车
//         if (keyCode !== 13) return
//         //判断这个输入是否空
//         if (target.value.trim() === '') {
//             alert("输入的不能为空");
//             return
//         }
//         this.props.code(target.value);
//         target.value = "";
//     }

//     render() {
//         return (
//             <div className="todo-header">
//                 <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
//             </div>
//         )
//     }
// }

function Header(props) {
    function handleKeyUp(event) {
        const { target, keyCode } = event
        //keyCode:是键盘点击的那一个键值，13代表着回车2
        //判断是否是回车
        if (keyCode !== 13) return
        //判断这个输入是否空
        if (target.value.trim() === '') {
            alert("输入的不能为空");
            return
        }
        props.code(target.value);
        target.value = "";
    }
    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
}
Header.propTypes = {
    code: PropTypes.func.isRequired
}
export default Header