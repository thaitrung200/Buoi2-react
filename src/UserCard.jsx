

 const User = ({user}) => {
  return (
    <div className="user-card">
        <img src={user.avatar} alt={user.avatar} className="user-avatar"/>
        <h3 className="user-name">{user.fullname}</h3>
        <button>View All</button>
    </div>
  )
}

const UserType = PropTypes.exact({
    id: PropTypes.number,
    fullname: PropTypes.string,
    avatar: PropTypes.string,
    job: PropTypes.string
})

User.propTypes = {
    user : UserType,
}