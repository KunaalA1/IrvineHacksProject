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

function getProfIDs(profs)
{
	for (const link of profs)
	{	
		//console.log(link)
		axios.get(`https://www.faculty.uci.edu/${link}`) 
		.then(({ data }) => 
		
		{//console.log(data);
		const $ = cheerio.load(data);
		const spans = [];
		//console.log($('div#research-interests'))
		$('div#research-interests').each((_idx, el) => { //Not even getting triggered 
			
			//console.log("here");
			span = $(el).text();
			spans.push(span);
			
			oldList = span.split('');
			
			span = span.replace(/\n/g, '');
		
			span = format(span.split(''))
			span = span.trim()
			console.log(span);

			//console.log(spans);
		});
		$('div#contact-info').each((_idx, el) => { //Not even getting triggered 
			
			//console.log("here");
			span = $(el).text();
			span = span.replace(/\n/g, '');
			span = format(span.split(''))
			spans.push(span);
			console.log(span);
			//console.log(spans);
		});
		
		});
	}
}



axios.get(`https://faculty.uci.edu/search?search_type=nameorucinetid&search_term=cooper`) 
		.then(({ data }) => {

			const $ = cheerio.load(data);
			profileLink = $('a[title^="View Profile For:"]').attr('href')
			console.log(profileLink)
			getProfIDs([profileLink])
			// $('a[title^="View Profile For:"]').each((_idx, el) => {

			// 	console.log($(el).attr('href'))
			// })
			


		})

const profs = ["profile/?facultyId=4661"];
interests = getProfIDs(profs);