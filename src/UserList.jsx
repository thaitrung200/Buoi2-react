

 const UserList = ({users}) => {
    const list = users.map((user) => <User user={user}/>)
  return (
    <div className="user-list">{list}</div>
  )
}

UserList.propTypes = {
    users : propTypes.arrayOf(UserType)
}