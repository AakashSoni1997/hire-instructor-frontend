import { combineReducers } from "redux";
import authReducers from "./AuthReducers";
import { CardReducers } from "./CardReducers";
import { GroupClassRedeucer } from "./GroupClassReducers";
import HomePagereducer from "./HomePagereducer";
import { InstructorReducer } from "./instructorReducer";
import { CompleteProfileReducers } from "./CompleteProfileReducers"
import { BlogReducer } from "./BlogReducer";

export default combineReducers({
    auth: authReducers,
    instructor: InstructorReducer,
    card: CardReducers,
    home: HomePagereducer,
    blogs:BlogReducer,
    group: GroupClassRedeucer,
    profile: CompleteProfileReducers,
})