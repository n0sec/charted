<script lang="ts">
	import { definitions } from '$lib/definitions';
	import 'iconify-icon';
</script>

<div class="container mx-auto mb-6">
	<article class="space-y-5 mt-6">
		<section class="space-y-5">
			<h1 class="unstyled font-bold text-2xl">How to Use This Tool</h1>
			<p>
				To use this tool, begin by uploading a HAR file on the <a
					href="/"
					class="font-bold"
					target="_self"
				>
					<iconify-icon icon="ic:outline-home" width="18" height="18" class="align-sub" />
					Home</a
				> page. Once uploaded, the application will generate charts and tables based on the data contained
				within the HAR file. To analyze a new file, refresh the page.
			</p>
		</section>
		<section class="space-y-5">
			<h1 class="unstyled font-bold text-2xl mt-6">What is a HAR File?</h1>
			<p>
				The <a
					href="https://en.wikipedia.org/wiki/HAR_(file_format)"
					target="_blank"
					class="font-bold">HAR (HTTP Archive)</a
				> format is a file used by several HTTP session tools to export captured network data. The format
				is a JSON object with a particular set of fields. Not all the fields in the HAR format are mandatory,
				and in many cases, some information won't be saved to the file.
			</p>
		</section>
		<aside class="alert variant-filled-warning md:w-1/2 rounded-2xl">
			<!-- Icon -->
			<div>
				<iconify-icon icon="ic:baseline-warning" width="32" height="32" />
			</div>
			<!-- Message -->
			<div class="alert-message">
				<h6 class="font-bold">Warning! HAR files contain sensitive data!</h6>
				<ol class="list-disc ml-6 space-y-1">
					<li>Content of the pages you downloaded while recording</li>
					<li>
						Your cookies, which would allow anyone with the HAR file to impersonate your account
					</li>
					<li>
						All the information that you submitted while recording: personal details, passwords,
						credit card numbers, etc.
					</li>
				</ol>
			</div>
		</aside>
		<section class="space-y-5">
			<h1 class="unstyled font-bold text-2xl">How to Capture a HAR File</h1>
			<p>
				A HAR file can be captured on most modern-day browsers, including Internet Explorer/Edge,
				Mozilla Firefox, and Google Chrome.
			</p>
		</section>
		<div class="sm:flex sm:flex-col md:grid md:grid-cols-3 gap-5">
			<!-- * Internet Explorer * -->
			<div class="card overflow-hidden">
				<header class="card-header font-bold p-3 bg-primary-500">
					<h3 class="ml-1">Internet Explorer/Edge</h3>
				</header>
				<section class="p-4 text-sm">
					<p class="unstyled text-sm">
						See detailed instructions on how to capture a HAR file in Internet Explorer/Edge on <a
							href="https://www.google.com/url?q=https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/network/"
							target="_blank"
							class="font-bold">Microsoft's website</a
						>
					</p>
					<ol class="list-decimal mt-5 ml-6 space-y-3">
						<li>
							Open the Developer Tools from the menu (Menu > More Tools > Developer tools), or by
							pressing F12 (or Fn-F12) on your keyboard
						</li>
						<li>Open the Network tab</li>
						<li>
							Look for a round button at the top left of the Network tab. Make sure it's red. If
							it's grey, click it once to start recording
						</li>
						<li>Turn on <em>"Preserve Log"</em></li>
						<li>Reproduce whatever issue is occurring</li>
						<li>
							Save the capture by right-clicking on the grid and choosing <em
								>"Save as HAR with Content"</em
							>
						</li>
					</ol>
					<p class="unstyled text-sm mt-5">
						For Internet Explorer, use <a
							href="https://www.google.com/url?q=https://www.httpwatch.com/"
							target="_blank"
							class="font-bold">HttpWatch</a
						>:
					</p>
					<ol class="list-decimal mt-5 ml-6 space-y-3">
						<li>Download and install HttpWatch</li>
						<li>Start the HttpWatch capture rigth before capturing the issue</li>
						<li>Stop the capture after reproducing the issue</li>
						<li>Export the capture to HAR format</li>
					</ol>
				</section>
			</div>
			<!-- * Mozilla Firefox * -->
			<div class="card overflow-hidden">
				<header class="card-header font-bold p-3 bg-primary-500">
					<h3 class="ml-1">Mozilla Firefox</h3>
				</header>
				<section class="p-4 text-sm">
					<ol class="list-decimal mt-5 ml-6 space-y-3">
						<li>
							Start Firefox Developer Tools in Network Mode (Top right menu > Developer > Network,
							or <kbd class="kbd">Ctrl-Shift-E</kbd>/<kbd class="kbd">Cmd-Option-E</kbd> on your keyboard)
						</li>
						<li>Turn on <em>"Persist logs"</em> on the right</li>
						<li>Reproduce the issue</li>
						<li>
							Save the capture by right-clicking on the grid and choosing <em>"Save all as HAR"</em>
						</li>
					</ol>
				</section>
			</div>
			<!-- * Google Chrome * -->
			<div class="card overflow-hidden">
				<header class="card-header font-bold p-3 bg-primary-500">
					<h3 class="ml-1">Google Chrome</h3>
				</header>
				<section class="p-4 text-sm">
					You can record your HTTP session using the Network tab in the Developer Tools in Google
					Chrome.
					<ol class="list-decimal mt-5 ml-6 space-y-3">
						<li>
							Open the Developer Tools from the menu (Menu > More Tools > Developer tools), or by
							pressing <kbd>F12</kbd> (or <kbd>Fn-F12</kbd>) on your keyboard.
						</li>
						<li>Click on the Network tab</li>
						<li>
							Look for a round button at the top left of the Network tab. Make sure it's red. If
							it's grey, click it once to start recording.
						</li>
						<li>Turn on <em>"Preserve log"</em></li>
						<li>
							You can use the clear button (a circle with a diagnol line through it) right before
							trying to reproduce the issue to remove unnecessary header information
						</li>
						<li>Reproduce the issue</li>
						<li>
							Save the capture by right-clicking on the grid and choosing <em
								>"Save as HAR with Content"</em
							>
						</li>
					</ol>
				</section>
			</div>
		</div>
		<section class="space-y-5">
			<h1 class="unstyled font-bold text-2xl mt-6">HAR File Vocabulary</h1>
			<p>
				Review the definitions below to familiarize yourself with the network statistics that are
				presented when uploading a HAR file to this site.
			</p>
			<dl class="list-dl">
				{#each definitions as { title, description }, i}
					<div class="list-item">
						<span class="flex-auto">
							<dt class="font-bold">{title}</dt>
							<dd>
								{description}
							</dd>
						</span>
					</div>
				{/each}
			</dl>
		</section>
	</article>
</div>
