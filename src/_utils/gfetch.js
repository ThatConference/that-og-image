import fetchRetry from 'fetch-retry';
import config from '$utils/envConfig';

function init(fetch) {
	let _url = config.thatApi;

	let _fetch = fetchRetry(fetch);

	let headers = {
		credentials: 'include',
		'Content-Type': 'application/json',
		'that-site': 'that-og-image'
	};

	const json = (r) => r.json();

	function query({ query, variables = {} }) {
		return _fetch(_url, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query: `
            ${query}
          `,
				variables
			})
		}).then(json);
	}

	return {
		query
	};
}

export default init;
