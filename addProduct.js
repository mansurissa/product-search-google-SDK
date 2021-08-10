function main(projectId, location, productSetId, productSetDisplayName) {
  // [START vision_product_search_create_product_set]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  async function createProductSet() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productSetId = 'Id of the product set';
    // const productSetDisplayName = 'Display name of the product set';

    // Resource path that represents Google Cloud Platform location.
    const locationPath = client.locationPath(projectId, location);

    const productSet = {
      displayName: productSetDisplayName,
    };

    const request = {
      parent: locationPath,
      productSet: productSet,
      productSetId: productSetId,
    };

    const [createdProductSet] = await client.createProductSet(request);
    console.log(`Product Set name: ${createdProductSet.name}`);
  }
  createProductSet();
  // [END vision_product_search_create_product_set]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
