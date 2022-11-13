import { UserStore } from "./models/user_model";
const user={
    first_name:"Ahmed",last_name:"Othman",password:"password",
};
const store=new UserStore();
store.create(user).then((u)=>{
    
})