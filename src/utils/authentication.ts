 function authencation ():Boolean {
    const token=localStorage.getItem('token_access')
    if(!token || token== undefined || token ==null || token == '' ){
        return false
    }else{
        return true
    }
}

export default authencation;