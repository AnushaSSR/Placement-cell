const User= require('../models/user');
// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/sign-in');
    }


    return res.render('user_sign_up', {
        title: "Placement Cell | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('user_sign_in', {
        title: "Placement Cell| Sign In"
    })
}


// get the sign up data
module.exports.create = function(req, res){

    if (req.body.password != req.body.confirm_password){
        // req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}
       
        if (!user){
            User.create(req.body, function(err, user){
              if(err){console.log('error in creating user while signing up'); return}
              
              return res.redirect('/user/sign-in');

            })
        }else{
            req.flash('success', 'You have signed up, login to continue!');
            // console.log("User already exists");
            return res.redirect('back');
        }

    });

}

module.exports.createSession = function(req,res){
    console.log("hello");
    return res.redirect('/');
}



// module.exports.signIn = function (req,res) {
//     res.render('employee_sign_in', {
//         title: "Placement Cell | sign-in"
//     });
// }

// module.exports.signUp = function (req,res) {
//     return res.render('employee_sign_up',{
//         title: "Placement Cell| sign-up"
//     });
// }
