import { save, load } from './file_manager'

export function Insert_user (user_first_name, user_last_name, password, email) {

    const content = "".concat(user_first_name,';',user_last_name,';',password,';',email)

    save('./src/data/database.csv', content)
}

export function get_all_users (path) {

    const users = load(path)
    const arrayUsers = []

    users = users.split('-')
    users.forEach(element => {
        arrayUsers.push(element.split(';'))
    });

    return arrayUsers

}

export function select_user (path, user) {
    const users = get_all_users(path)

    users.forEach(_user => {
        if (_user[0] === user) {
            return _user
        }
    })

    return []
}
