import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserContext } from '../../App'
const { Header } = Layout

function NavBar() {
  const { user, setUser } = useContext(UserContext)
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        {user
          ? <Menu.Item key="4" onClick={() => setUser(null)}>Logout</Menu.Item>
          : <>
              <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/signup">Sign Up</Link></Menu.Item>
            </>}
        <Menu.Item key="5"><Link to="/cards">Cards</Link></Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar



















// import React, { useContext} from 'react'
// import { Link } from 'react-router-dom'
// import { Layout, Menu } from 'antd'
// import {UserContext } from '../../App'
// import {setUser, user} from '../scenes/Login'
// import { FormProvider } from 'antd/lib/form/context'
// const { Header } = Layout

// function NavBar() {
//   return (
//     <Header>
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//         {user
//         ? <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
//           : <>         
//         <Menu.Item key="4"> onClick={() => setUser(null)}>Logout</Menu.Item>

//         <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
//         <Menu.Item key="3"><Link to="/signup">Sign Up</Link></Menu.Item>
//         </>}
//         <Menu.Item key="5"><Link to="/cartoon">Cartoon</Link></Menu.Item>
//       </Menu>
//     </Header>
//   )
// }

// export default NavBar
// // ++Feb5pm