function main(projectId, location, productSetId) {
  // [START vision_product_search_get_product_set]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  async function getProductSet() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productSetId = 'Id of the product set';

    // Resource path that represents Google Cloud Platform location.
    const productSetPath = client.productSetPath(
      projectId,
      location,
      productSetId
    );

    const [productSet] = await client.getProductSet({name: productSetPath});
    console.log(`Product Set name: ${productSet.name}`);
    console.log(`Product Set display name: ${productSet.displayName}`);
  }
  getProductSet();
  // [END vision_product_search_get_product_set]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
