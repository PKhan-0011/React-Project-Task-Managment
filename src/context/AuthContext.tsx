
interface Childrenprops {
    children: React.ReactNode
}

const  AuthContext = ({children}: Childrenprops) => {
  return (
    <div className="text-2xl text-white">
        {children}
    </div>
  )
}

export default AuthContext