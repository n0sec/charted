<script>
	import { FileDropzone } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto justify-center items-center">
	<form method="POST">
		<FileDropzone name="files" enctype="multipart/form-data" accept=".har" />
	</form>
</div>
