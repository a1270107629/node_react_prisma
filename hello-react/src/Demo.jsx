
//创建外壳组件APP
import React from 'react'

import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import List from './components/List/List'
const url = 'http://localhost:7777'

function Demo() {
    const [todos, setTodos] = React.useState(
        [
            { id: 1, name: "吃饭", done: true },
            { id: 2, name: "睡觉", done: false },
            { id: 3, name: "打代码", done: true },
        ]
    )

    function getData() {
        // console.log('getdata调用了')
        fetch(`${url}` + '/todos', { method: 'get' })
            .then(success => {
                return success.json()
            })
            .then(responce => {
                console.log(responce)
                setTodos(responce.todos)
            })
            .catch(e => { console.log(e) })
    }

    // componentDidMount() {
    //   this.getData()
    // }

    React.useEffect(() => {
        getData()
    }, [])

    //添加相应的事情
    function code(value) {
        //子组件中的值 ===》父组件，就可以给子组件一个函数，子组件在调用函数的时候，将值作为参数传递过去
        fetch(`${url}` + '/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': value })
        })
            .then(success => {
                getData()
            })
            .catch(e => { console.log(e) })
    }


    //根据id,修改状态中是否被选中
    function checked(id, checked) {
        // const { todos } = this.state;
        const newTodo = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: checked };
            }
            return todo;
        })
        // this.setState({ todos: newTodo })
        setTodos(newTodo)
    }

    //点击删除按钮，删除其中一行
    function deleteById(id) {
        fetch(`${url}` + '/todos/' + id, { method: 'delete' })
            .then(success => {
                console.log("success", success)
            })
            .then(res => {
                console.log("success1")
                getData()
            })
            .catch(e => { console.log(e) })
    }

    //全选
    function choseAll(done) {
        const newTo = todos.map((todo) => {
            return { ...todo, done };
        })
        setTodos([...newTo])
    }


    // 删除选中的内容
    function Alldelete() {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        todos.map((todo) => {
            if (todo.done === true) {
                deleteById(todo.id)
            }
        })
        alert("已删除完成的任务")
        this.getData()
    }

    function PutOne(id, done) {
        fetch(`${url}` + '/todos/' + id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'done': done })
        })
            .then(success => {
                console.log("success", success)
            })
            .then(() => {
                getData()
            })
            .catch(e => { console.log(e) })
    }

    function PutAll() {
        todos.map((todo) => {
            PutOne(todo.id, todo.done)
        })
        getData()
    }


    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header code={code} />
                {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
                {
                    <List
                        todos={todos}
                        show={checked}
                        deleteById={deleteById}
                    >
                    </List>
                }
                <Footer
                    allCheck={todos}
                    choseAll={choseAll}
                    Alldelete={Alldelete}
                    getData={getData}
                    PostAll={PutAll}
                />
            </div>
        </div>
    )
}

export default Demo