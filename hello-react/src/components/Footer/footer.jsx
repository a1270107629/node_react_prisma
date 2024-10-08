import React from 'react';
import './footer.css'
// class Footer extends Component {
//     //全选以及全不选
//     chose = (event) => {
//         //1.如果选中，所有的全都选中
//         this.props.choseAll(event.target.checked)
//     }

//     //删除选中内容
//     Alldelete = () => {
//         this.props.Alldelete();
//     }

//     Submit = () => {
//         this.props.PostAll();
//         alert('提交成功')
//     }


//     render() {
//         const todos = this.props.allCheck;
//         const sum = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
//         return (
//             <div className="todo-footer">
//                 <label>
//                     {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
//                     <input onChange={this.chose} type="checkbox" checked={sum === todos.length && todos.length !== 0 ? true : false} />
//                 </label>
//                 <span>
//                     <span>已完成{sum}</span> / 全部{todos.length}
//                 </span>
//                 <button onClick={this.Submit} className='btn btn-danger'>提交任务</button>
//                 <button onClick={this.Alldelete} className="btn btn-danger">清除已完成任务</button>
//             </div>
//         );
//     }
// }

function Footer(props) {
    const todos = props.allCheck;
    const sum = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
    //全选以及全不选
    function chose(event) {
        //1.如果选中，所有的全都选中
        props.choseAll(event.target.checked)
    }

    //删除选中内容
    function Alldelete() {
        props.Alldelete();
    }

    function Submit() {
        props.PostAll();
        alert('提交成功')
    }
    return (
        <div className="todo-footer">
            <label>
                {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
                <input onChange={chose} type="checkbox" checked={sum === todos.length && todos.length !== 0 ? true : false} />
            </label>
            <span>
                <span>已完成{sum}</span> / 全部{todos.length}
            </span>
            <button onClick={Submit} className='btn btn-danger'>提交任务</button>
            <button onClick={Alldelete} className="btn btn-danger">清除已完成任务</button>
        </div>
    );
}
export default Footer;