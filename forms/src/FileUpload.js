<Dropzone onDrop={(files) => this.onDrop(files)}>
    <div>Try dropping some files here, or click to select files to upload.</div>
</Dropzone>

function onDrop(acceptedFiles, rejectedFiles) {
    // do stuff with files…
}
