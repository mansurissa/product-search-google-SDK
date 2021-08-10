function main(projectId, location, productId, referenceImageId) {
  // [START vision_product_search_get_reference_image]
  const vision = require('@google-cloud/vision');

  const client = new vision.ProductSearchClient();

  async function getReferenceImage() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productId = 'Id of the product';
    // const referenceImageId = 'Id of the reference image';

    const formattedName = client.referenceImagePath(
      projectId,
      location,
      productId,
      referenceImageId
    );

    const request = {
      name: formattedName,
    };

    const response = await client.getReferenceImage(request);
    console.log(`response.name: ${response.name}`);
    console.log(`response.uri: ${response.uri}`);
  }
  getReferenceImage();
  // [END vision_product_search_get_reference_image]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
