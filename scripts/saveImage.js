function saveImage() {
    document.getElementById('imageCanvas').toBlob(
        function (blob) {
            var link = document.createElement('a');

            var nameWithoutPath = filename.replace(/.*[\\/]([^\\/]+)$/, '$1');
            var nameWithoutExtension = nameWithoutPath.replace(/\.[^.]*$/, '');

            link.download = nameWithoutExtension + '_scrubbed.jpg';
            link.href = URL.createObjectURL(blob);
            link.click();
        },
        'image/jpeg',
        0.8
    );
}
