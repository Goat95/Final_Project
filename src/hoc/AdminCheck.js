import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function UserCheck(SpecificComponent, option = null) {
    function UserCheck(props) {
      const user = useSelector(state => state.isLoginReducer);
      const navigate = useNavigate();
     
      useEffect(() => {
          if (option) {
              if (option === "R-U-Admin?") {
                if (
                  user.email === "giback@landmark.com" 
                  || user.email === "chiyun@landmark.com" 
                  || user.email === "junhyeok@landmark.com" 
                  || user.email === "suhyeon@landmark.com"
                ) 
                {
                  
                } else {
                  navigate("/");
                }
              }
          }
      }, []);
        
      return (
        <>
          {
            option === "R-U-Admin?" ? <SpecificComponent {...props} user={user} /> : <SpecificComponent {...props} />
          }
        </>
      );
    }
    return UserCheck
}