// //创建外壳组件APP
// import React, { Component } from 'react'

// import './App.css'
// import Footer from './components/Footer/footer'
// import Header from './components/Header/header'
// import List from './components/List/List'
// const url = 'http://localhost:7777'

// class App extends Component {
//   getData = () => {
//     // console.log('getdata调用了')
//     fetch(`${url}` + '/todos', { method: 'get' })
//       .then(success => {
//         return success.json()
//       })
//       .then(responce => {
//         console.log(responce)
//         this.setState({ "todos": responce.todos })
//       })
//       .catch(e => { console.log(e) })
//   }

//   componentDidMount() {
//     this.getData()
//   }

//   state = {
//     todos: [
//       // { id: 1, name: "吃饭", done: true },
//       // { id: 2, name: "睡觉", done: false },
//       // { id: 3, name: "打代码", done: true },
//     ]
//   }


//   //添加相应的事情
//   code = (value) => {
//     //子组件中的值 ===》父组件，就可以给子组件一个函数，子组件在调用函数的时候，将值作为参数传递过去
//     fetch(`${url}` + '/todos', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ 'name': value })
//     })
//       .then(success => {
//         this.getData()
//       })
//       .catch(e => { console.log(e) })
//   }


//   //根据id,修改状态中是否被选中
//   checked = (id, checked) => {
//     const { todos } = this.state;
//     const newTodo = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, done: checked };
//       }
//       return todo;
//     })
//     this.setState({ todos: newTodo })
//   }

//   //点击删除按钮，删除其中一行
//   deleteById = (id) => {
//     fetch(`${url}` + '/todos/' + id, { method: 'delete' })
//       .then(success => {
//         console.log("success", success)
//       })
//       .then(res => {
//         console.log("success1")
//         this.getData()
//       }

//       )
//       .catch(e => { console.log(e) })
//   }

//   //全选
//   choseAll = (done) => {
//     const { todos } = this.state

//     const newTo = todos.map((todo) => {
//       return { ...todo, done };
//     })
//     this.setState({ todos: [...newTo] })
//   }


//   // 删除选中的内容
//   Alldelete = () => {
//     const { todos } = this.state;
//     // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
//     todos.map((todo) => {
//       if (todo.done === true) {
//         this.deleteById(todo.id)
//       }
//     })
//     alert("已删除完成的任务")
//     this.getData()
//   }

//   PutOne = (id, done) => {
//     fetch(`${url}` + '/todos/' + id, {
//       method: 'put',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ 'done': done })
//     })
//       .then(success => {
//         console.log("success", success)
//       })
//       .then(() => {
//         this.getData()
//       }

//       )
//       .catch(e => { console.log(e) })
//   }

//   PutAll = () => {
//     const { todos } = this.state;
//     todos.map((todo) => {
//       this.PutOne(todo.id, todo.done)
//     })
//     this.getData()
//   }

//   render() {
//     return (
//       <div className="todo-container">
//         <div className="todo-wrap">
//           <Header code={this.code} />
//           {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
//           {
//             <List
//               todos={this.state.todos}
//               show={this.checked}
//               deleteById={this.deleteById}
//             >
//             </List>
//           }
//           <Footer
//             allCheck={this.state}
//             choseAll={this.choseAll}
//             Alldelete={this.Alldelete}
//             getData={this.getData}
//             PostAll={this.PutAll}
//           />
//         </div>
//       </div>
//     )
//   }
// }
// // function App() {
// //   const [todos, setTodos] = React.useState(
// //     [
// //       //   // { id: 1, name: "吃饭", done: true },
// //       //   // { id: 2, name: "睡觉", done: false },
// //       //   // { id: 3, name: "打代码", done: true },
// //     ]
// //   )

// //   function getData() {
// //     // console.log('getdata调用了')
// //     fetch(`${url}` + '/todos', { method: 'get' })
// //       .then(success => {
// //         return success.json()
// //       })
// //       .then(responce => {
// //         console.log(responce)
// //         setTodos(responce.todos)
// //       })
// //       .catch(e => { console.log(e) })
// //   }

// //   // componentDidMount() {
// //   //   this.getData()
// //   // }

// //   useEffect(() => {
// //     getData()
// //   }, [])

// //   //添加相应的事情
// //   function code(value) {
// //     //子组件中的值 ===》父组件，就可以给子组件一个函数，子组件在调用函数的时候，将值作为参数传递过去
// //     fetch(`${url}` + '/todos', {
// //       method: 'POST',
// //       headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({ 'name': value })
// //     })
// //       .then(success => {
// //         getData()
// //       })
// //       .catch(e => { console.log(e) })
// //   }


// //   //根据id,修改状态中是否被选中
// //   function checked(id, checked) {
// //     // const { todos } = this.state;
// //     const newTodo = todos.map((todo) => {
// //       if (todo.id === id) {
// //         return { ...todo, done: checked };
// //       }
// //       return todo;
// //     })
// //     // this.setState({ todos: newTodo })
// //     setTodos(newTodo)
// //   }

// //   //点击删除按钮，删除其中一行
// //   deleteById = (id) => {
// //     fetch(`${url}` + '/todos/' + id, { method: 'delete' })
// //       .then(success => {
// //         console.log("success", success)
// //       })
// //       .then(res => {
// //         console.log("success1")
// //         getData()
// //       })
// //       .catch(e => { console.log(e) })
// //   }

// //   //全选
// //   function choseAll(done) {
// //     const newTo = todos.map((todo) => {
// //       return { ...todo, done };
// //     })
// //     setTodos([...newTo])
// //   }


// //   // 删除选中的内容
// //   function Alldelete() {
// //     // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// //     todos.map((todo) => {
// //       if (todo.done === true) {
// //         this.deleteById(todo.id)
// //       }
// //     })
// //     alert("已删除完成的任务")
// //     this.getData()
// //   }

// //   function PutOne(id, done) {
// //     fetch(`${url}` + '/todos/' + id, {
// //       method: 'put',
// //       headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({ 'done': done })
// //     })
// //       .then(success => {
// //         console.log("success", success)
// //       })
// //       .then(() => {
// //         getData()
// //       })
// //       .catch(e => { console.log(e) })
// //   }

// //   function PutAll() {
// //     todos.map((todo) => {
// //       PutOne(todo.id, todo.done)
// //     })
// //     getData()
// //   }


// //   return (
// //     <div className="todo-container">
// //       <div className="todo-wrap">
// //         <Header code={this.code} />
// //         {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
// //         {
// //           <List
// //             todos={this.state.todos}
// //             show={this.checked}
// //             deleteById={this.deleteById}
// //           >
// //           </List>
// //         }
// //         <Footer
// //           allCheck={this.state}
// //           choseAll={this.choseAll}
// //           Alldelete={this.Alldelete}
// //           getData={this.getData}
// //           PostAll={this.PutAll}
// //         />
// //       </div>
// //     </div>
// //   )
// // }
// export default App