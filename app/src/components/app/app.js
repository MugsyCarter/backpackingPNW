import template from './app.html';

export default {
    template,
    controller
};


function controller() {
    rootScope.$on('login', (event, user)=>{
        // console.log('after Logged in, useris ', user.user);
        console.log('user logged in as ', user);
        this.getUser(user);
    });

    rootScope.$on('logout', (event)=>{
        this.user = null;
        $state.go('home');
        // console.log('Logged out, useris ', user.user);
        // this.updateMenu();
    });

    rootScope.$on('updateUser', (event, user)=>{
        // no code here yet
    });
};