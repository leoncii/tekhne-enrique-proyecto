import React from 'react'

const Test = ({ users }) => {
  const { user, pass, _id } = users[0]

  const handleClick = e => {
    console.log(e)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>user</td>
            <td>pass</td>
            <td>id</td>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <td>leo</td>
            <td>1234</td>
            <td>!"#!"$</td>
          </tr>
        </tbody>
      </table>
      {users.map(item => (
        <li>
          <div>
            <h4>Usuario:</h4>
            <p>{item.user}</p>
          </div>
          <div>
            <h4>Password:</h4>
            <p>{item.pass}</p>
          </div>
          <div>
            <h4>ID:</h4>
            <p>{item._id}</p>
          </div>
        </li>
      ))}
    </div>
  )
}

export default Test
