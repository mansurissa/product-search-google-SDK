function main(projectId, location, productId) {
  // [START vision_product_search_list_reference_images]
  const vision = require('@google-cloud/vision');

  const client = new vision.ProductSearchClient();

  async function listReferenceImage() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';

    // const formattedParent = client.productPath(projectId, location, productId);
    // const location = 'A compute region name';
    // const productId = 'Id of the product';
    const formattedParent = client.productPath(projectId, location, productId);
    const request = {
      parent: formattedParent,
    };

    const [response] = await client.listReferenceImages(request);
    response.forEach(image => {
      console.log(`image.name: ${image.name}`);
      console.log(`image.uri: ${image.uri}`);
    });
  }
  listReferenceImage();
  // [END vision_product_search_list_reference_images]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
