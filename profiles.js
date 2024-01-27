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

function getProfIDs(profs)
{
	for (const link of profs)
	{
		axios.get(`https://www.faculty.uci.edu/${link}`).then(({ data }) => { 
			const $ = cheerio.load(data);
			const spans = [];
			$('div.research-interests').each((_idx, el) => {
			const span = $(el).text();
			spans.push(span);
			console.log(span);
			});
		});
	}
}

const profs = ["profile/?facultyId=4661"];
interests = getProfIDs(profs);