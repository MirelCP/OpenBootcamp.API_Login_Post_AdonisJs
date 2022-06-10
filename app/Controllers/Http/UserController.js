'use strict'

const User = use('App/Models/User');

class UserController {
    async create({ request, response, auth}) {
        const user = await User.create(request.only(['username','email','password']));

        await auth.login(user);
        return response.redirect('/');
    }

    async login({ request, auth, response }) {
        const { email, password } = request.all();
        try {
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch (error) {
           session.flash({ loginError: 'Invalid credentials' });
              return response.redirect('/login');
        }
    }
}

module.exports = UserController