const axios = require('axios');
const cheerio = require('cheerio');

const extractLinks = $ => [ 
	...new Set( 
		$('#result_top a') // Select pagination links 
			.map((_, a) => $(a).attr('href')) // Extract the href (url) from each link 
			.toArray() // Convert cheerio object to array 
	), 
]; 

function getProfs(netid)
{
	axios.get(`https://www.faculty.uci.edu/search?search_type=nameorucinetid&search_term=${netid}`).then(({ data }) => { 
		const $ = cheerio.load(data); // Initialize cheerio 
		const links = extractLinks($);
		links.filter((link) => link.startsWith('profile'));
		return links;
	});
}

function format(list){
	
	var i = 0;
	while (i < list.length) {

		if(list[i] === " "){

			if (i != list.length -1){

				if (list[i+1] === " "){

					list.splice(i,1)
				} else {
					i++;
				}
			} else {

				break
			}
		} else {
			i++;
		}
	}


	return list.join('')
}

function getProfIDs(link)
{
	return new Promise(async (resolve, reject) => {


		
		details = {}

		await axios.get(`https://www.faculty.uci.edu/${link}`) 
		.then(({ data }) => 
		
		{//console.log(data);
		const $ = cheerio.load(data);
	
		//console.log($('div#research-interests'))
		$('div#research-interests').each((_idx, el) => { //Not even getting triggered 
			
			//console.log("here");
			span = $(el).text();
		
			
			oldList = span.split('');
			
			span = span.replace(/\n/g, '');
		
			span = format(span.split(''))
			span = span.trim()
			// console.log(span);
			details.research = span;

			//console.log(spans);
		});
		$('div#contact-info').each((_idx, el) => { //Not even getting triggered 
			
			//console.log("here");
			span = $(el).text();
			span = span.replace(/\n/g, '');
			span = format(span.split(''))
			// console.log(span);
			details.contact = span
			//console.log(spans);
		});
		$('a[href^="https://faculty.uci.edu/profile/?facultyId="]').each((_idx, el) => { //Not even getting triggered 
			

			span = $(el).text();
	
			span = span.replace(/\n/g, '');
			span = format(span.split(''));
		// console.log(span);
			details.facultyPage = span
			//console.log(spans);
		});

		details.websites = ""
		$('div.profile-section-item > a').each((_idx, el) => { //Not even getting triggered 
		
	
			span = $(el).attr("href");
	
			details.websites += span + " ";
			// console.log(span);

			// if (span.includes("www")) {

			// 	details.websites = span
			// } else {

			// 	details.websites = "No other links on faculty site. Try google."
			// }
		
			//console.log(spans);
			})
		});
	

		// console.log(details)


	resolve(details);
	})
	
}


function profileGen(uciNetId){

	return new Promise(async (resolve,reject) => {


		await axios.get(`https://faculty.uci.edu/search?search_type=nameorucinetid&search_term=${uciNetId}`) 
		.then(async ({ data }) => {

			const $ = cheerio.load(data);
			profileLink = $('a[title^="View Profile For:"]').attr('href')
			// console.log(profileLink)
			detailsJSON = await getProfIDs(profileLink) //Skips this part for some reason
			
			// $('a[title^="View Profile For:"]').each((_idx, el) => {

			// 	console.log($(el).attr('href'))
			// })
			


		})

	//const profs = ["profile/?facultyId=4661"];
	//interests = await getProfIDs(profs);
	
	return resolve(detailsJSON);

	})
}

async function profilesMain(uciNetId){

	string = await profileGen(uciNetId); //Interestingly, I need a function to 
	console.log(string)
	return string
}

profilesMain("cooper")

