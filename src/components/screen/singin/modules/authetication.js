import { Insert_user, get_all_users, select_user } from './manager_database'

export const verify_fields = (fields) => {
    if (fields[0] === "") {
        return false
    }

    if (fields[1] === "" && fields[2] === "") {
        return false
    }
}