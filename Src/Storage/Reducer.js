import {LOGIN, SIGNOUT, VERIFICATION} from './Constants';

const initialstate = {
  firstname: '',
  lastname: '',
  email: '',
  mobilenumber: '',
  userid: '',
  profileImage: '',
  isloggedin: false,
  defaultaddress: 'HSS Road, Kazhakootam - Kovalam Bypass Rd, Shivanagar Residence Association, Thiruvananthapuram, Kazhakkoottam, Kerala 695585, India',
  isverification:false
};
export const laundryreducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        mobilenumber: action.payload.mobilenumber,
        isloggedin: true,
        userid: action.payload.userid,
        profileImage: action.payload.profileImage,
      };
    case SIGNOUT:
      return {
        ...state,
        isloggedin: false,
        isverification:false
      };
      case VERIFICATION:
        return {
          ...state,
          isverification:true
        };
    default:
      return {
        ...state,
      };
  }
};
