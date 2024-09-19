import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/item'
import './List.css'

// class List extends Component {
//     //  对接收的参数做限制

//         render() {
//         const { todos } = this.props;
//         return <ul className="todo-main">
//             {
//                 todos.map((todo) => {
//                     return <Item key={todo.id} {...todo} createCheck={this.props.show} deleteById={this.props.deleteById} />
//                 })
//             }
//         </ul>
//     }
// }


function List(props) {
    const { todos } = props;
    return (<ul className="todo-main">
        {
            todos.map((todo) => {
                return <Item key={todo.id} {...todo} createCheck={props.show} deleteById={props.deleteById} />
            })
        }
    </ul>)
}

// List.PropTypes = {
//     todos: PropTypes.array.isRequired,
//     show: PropTypes.func.isRequired,
//     deleteById: PropTypes.func.isRequired,
// }

List.propTypes = {
    todos: PropTypes.array.isRequired,
    show: PropTypes.func.isRequired,
    deleteById: PropTypes.func.isRequired,
}
export default List;