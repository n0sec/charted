export type HarEntry = {
	request?: {
		url?: string;
		bodySize?: number;
		cookies?: Cookies[];
		headers?: Headers[];
		headersSize?: number;
		httpVersion?: string;
		method?: string;
		postData?: {
			mimeType?: string;
			params?: PostDataParams[];
			text?: string;
		};
	};
	queryString?: [];
	url?: string;
	response?: {
		bodySize?: number;
		content?: {
			mimeType?: string;
			size?: number;
			text?: string;
		};
		cookies?: Cookies[];
		headers?: Headers[];
		headersSize?: number;
		httpVersion?: string;
		redirectURL?: string;
		status?: number;
		statusText?: string;
	};
	serverIPAddress?: string;
	startedDateTime?: string;
	time?: number;
	timings?: {
		blocked?: number;
		connect?: number;
		dns?: number;
		receive?: number;
		send?: number;
		wait?: number;
	};
};

interface Cookies {
	name: string;
	value: string;
	path: string;
	domain: string;
	expires: string;
	httpOnly: boolean;
	secure: boolean;
}

interface Headers {
	name: string;
	value: string;
}

interface PostDataParams {
	name: string;
	value: string;
}
