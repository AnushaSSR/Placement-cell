module.exports.signIn = function (req,res) {
    res.render('employee_sign_in', {
        title: "Placement Cell | sign-in"
    });
}

module.exports.signUp = function (req,res) {
    return res.render('employee_sign_up',{
        title: "Placement Cell| sign-up"
    });
}
