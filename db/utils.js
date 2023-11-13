const axios = require("axios");

exports.showSearch = (showInput) => {
	const searchTerm = showInput;
	return axios
		.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
		.then(({ data }) => {
			const show_id = data.id;
			const show_name = data.name;
			const show_img_url = data.url;
            console.log({show_id, show_name, show_img_url})
			return {show_id, show_name, show_img_url}
		});
};


exports.castSearch = (show_id) => {
	const searchTerm = show_id;
	return axios
		.get(`https://api.tvmaze.com/shows/${searchTerm}/cast`)
		.then(({ data }) => {



            data.map((castMember) => {

            })
        }

        const person_name = data.person.name
        const person_id = data.person.id
        const person_img_url = data.person.url
        const character_name = data.character.name
        const character_id = data.character.id
        const character_img_url = data.character.url            
		console.log([show_id, person_name, person_id, person_img_url, character_name, character_id, character_img_url])
		});
};

