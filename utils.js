const axios = require("axios");

exports.showSearch = (showInput) => {
	const searchTerm = showInput;
	return axios
		.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
		.then(({ data }) => {
			const show_id = data.id;
			const show_name = data.name;
			const show_img_url = data.url;
			console.log({ show_id, show_name, show_img_url });
			return { show_id, show_name, show_img_url };
		});
};

exports.castSearch = (show_id) => {
	const searchTerm = show_id;
	return axios
		.get(`https://api.tvmaze.com/shows/${searchTerm}/cast`)
		.then(({ data }) => {
			const answer = data.map((castMember) => {
				return {
					show_id, 
					person_img_url: castMember.person.url,
					person_name: castMember.person.name,
					person_id: castMember.person.id,
					char_name: castMember.character.name,
					char_id: castMember.character.id,
					char_img_url: castMember.character.url}
			});
			return answer
		});
};

