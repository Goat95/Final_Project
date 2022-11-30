import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function UserCheck(SpecificComponent, option = null) {
    function UserCheck(props) {
      const user = useSelector(state => state.isLoginReducer);
      const navigate = useNavigate();
     
      useEffect(() => {
          if (option) {
              if (option === "U-need-Login" && !user.isLogin) {
                navigate("/");
              }
          }
      }, []);
        
      return (
        <>
          {
            option === "U-need-Login" ? <SpecificComponent {...props} user={user} /> : <SpecificComponent {...props} />
          }
        </>
      );
    }
    return UserCheck
}