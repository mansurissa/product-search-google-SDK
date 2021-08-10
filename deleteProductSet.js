function main(projectId, location, productSetId) {
  // [START vision_product_search_delete_product_set]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  async function deleteProductSet() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productSetId = 'Id of the product set';

    // Resource path that represents full path to the product set.
    const productSetPath = client.productSetPath(
      projectId,
      location,
      productSetId
    );

    await client.deleteProductSet({name: productSetPath});
    console.log('Product set deleted.');
  }
  deleteProductSet();
  // [END vision_product_search_delete_product_set]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
