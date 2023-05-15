export const definitions = [
	{
		title: 'Body Size',
		description:
			'Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body. Set to -1 if the info is not available.'
	},
	{
		title: 'Content Size',
		description:
			'The length of the returned content in bytes. Should be equal to `response.bodySize` if there is no compression and bigger when the content has been compressed.'
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
	{ title: 'Blocked', description: 'Time spent in a queue waiting for a network connection.' },
	{ title: 'DNS', description: 'DNS resolution time. The time required to resolve a host name.' },
	{ title: 'SSL', description: 'Time required for SSL/TLS negotiation.' },
	{
		title: 'Connect',
		description:
			'Time required to create TCP connection. Note that a connection is not a socket. One connection may use multiple sockets.'
	},
	{ title: 'Send', description: 'Time required to send HTTP request to the server.' },
	{ title: 'Wait', description: 'Waiting for a response from the server.' },
	{ title: 'Receive', description: 'Time required to read entire response from the server.' }
];
