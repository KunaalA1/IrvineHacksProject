const Course = require('../models/Application');
const App = require('../models/Application');
const profileGen = require('../profiles.js');


const prof_index = (req, res) => {
    res.render('main', {peterportal: "https://api.peterportal.org/rest/v0/instructors/all"});
}
details_json = {};

let url = 'https://api.peterportal.org/rest/v0/instructors/all?=';

let options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.0'}};
fetch(url, options)
  .then(res => res.json())
  .then(json =>  {details_json = json})
  .then(() => console.log(details_json))
  .catch(err => console.error('error:' + err));


/*

var final_details = JSON.parse(JSON.stringify(details_json));
console.log(typeof(final_details));
for(const key in details_json){
    details_json[key.ucinetid] = profileGen(x.ucinetid)
}
*/



const prof_app_post = async (req, res) => {
    //const research_topics = await profileGen(req.body.ucinetid).then(
    
    //console.log(research_topics);
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