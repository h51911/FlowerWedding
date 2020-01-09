import { UPDATE_GENDER } from '../reducer/user';

export function up_gen(id, gender) {
    return {
        type: UPDATE_GENDER,
        payload: {
            id,
            gender
        }
    }
}

export default {
    up_gen
}