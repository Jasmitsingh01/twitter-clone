import Cookies from "js-cookie";
 function authencation ():Boolean {
    const token=Cookies.get('accessToken')
    if(!token || token== undefined || token ==null || token == '' ){
        return false
    }else{
        return true
    }
}

export default authencation;