const Course = require('../models/Application');
const profile = require('../profiles')
const App = require('../models/Application');

const prof_index = (req, res) => {
    res.render('main', {peterportal: "https://api.peterportal.org/rest/v0/instructors/all"});
}

const prof_app_post = (req, res) => {
    const app = new App({
        prof_name:req.body.prof_name,
        notes: req.body.notes,
        research_topics: req.body.research_topics,
        finished: req.body.finished,
        ucinetid: req.body.ucinetid
    }
    );
    app.save()
    .then(result => {
        res.redirect('/profs');
    })
    .catch(err => {
        console.log(err);
    })
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
        console.log(result);
        res.render('app_track', {currentApps : result});
    })
    .catch(err => {
        console.log(err);
    })
}
const prof_app_delete = (req, res) => {
    const id = req.params.id;
    App.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/profs'});
    })
    .catch(err => {
        console.log(err);
    })
}
const prof_mark_app_finished = (req, res) => {
    
}


module.exports = {
    prof_index,
    prof_details,
    prof_apps,
    prof_app_delete,
    prof_app_post
}