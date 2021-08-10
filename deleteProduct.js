function main(projectId, location, productId) {
  // [START vision_product_search_delete_product]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  async function deleteProduct() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productId = 'Id of the product';

    // Resource path that represents full path to the product.
    const productPath = client.productPath(projectId, location, productId);

    await client.deleteProduct({name: productPath});
    console.log('Product deleted.');
  }
  deleteProduct();
  // [END vision_product_search_delete_product]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
