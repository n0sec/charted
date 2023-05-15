export const definitions = [
	{
		title: 'Body Size',
		description:
			'Size of the request body (POST data payload) in bytes. Set to -1 if the info is not available.'
	},
	{
		title: 'Content Size',
		description:
			'The length of the returned content in bytes. Should be equal to `response.bodySize` if there is no compression and bigger when the content has been compressed. Set to -1 if the info is not available.'
	},
	{
		title: 'Resource Type',
		description:
			'The type of resource the request was made for. ResourceType will be one of the following: document, stylesheet, image, media, font, script, texttrack, xhr, fetch, eventsource, websocket, manifest, other.'
	},
	{ title: 'Time', description: 'Total elapsed time of the request in milliseconds.' },
	{
		title: 'Cache',
		description:
			'Whether the request was served from the cache or not. Values are `disk`, `memory`, or `undefined`'
	},
	{
		title: 'Blocked',
		description:
			'Time spent in a queue waiting for a network connection. Set to -1 if the info is not available or does not apply.'
	},
	{
		title: 'DNS',
		description:
			'DNS resolution time. The time required to resolve a host name. Set to -1 if the info is not available or does not apply.'
	},
	{
		title: 'SSL',
		description:
			'Time required for SSL/TLS negotiation. Set to -1 if the info is not available or does not apply.'
	},
	{
		title: 'Connect',
		description:
			'Time required to create TCP connection. Note that a connection is not a socket. One connection may use multiple sockets. Set to -1 if the info is not available or does not apply.'
	},
	{
		title: 'Send',
		description: 'Time required to send HTTP request to the server.'
	},
	{
		title: 'Wait',
		description: 'Waiting for a response from the server.'
	},
	{
		title: 'Receive',
		description: 'Time required to read entire response from the server.'
	}
];
