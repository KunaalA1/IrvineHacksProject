const Course = require('../models/Application');
const profile = require('../profiles')
const App = require('../models/Application');

const prof_index = (req, res) => {
    res.render('main', {peterportal: "https://api.peterportal.org/rest/v0/instructors/all"});
}

const prof_details = (req, res) => {
    const id = req.params.id;
    App.findById(id)
    .then(result =>{
        res.render('details', {app: result})
    })
    .catch(err => {
        res.render('404');
    })
}
const prof_apps = (req, res) => {
    App.find().sort({createdAt: -1})
    .then(result => {
        res.render('app_track', {currentApps : result});
    })
    .catch(err => {
        console.log(err);
    })
}
const prof_app_delete = (req, res) => {
    const id = req.params.id;
    App.findByIdAndDelete(id, {finished: true})
    .then(result => {
        res.json({redirect: '/profs'});

    })
    .catch(err => {
        console.log(err);
    })
}
const prof_mark_app_finished = (req, res) => {
    
}
const prof_app_post = (req, res) => {
    const app = new App(req.body);
    app.save()
    .then(result => {
        res.redirect('/profs');
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    prof_index,
    prof_details,
    prof_apps,
    prof_app_delete,
    prof_app_post
}