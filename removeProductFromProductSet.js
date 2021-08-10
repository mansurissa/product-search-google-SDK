
function main(projectId, location, productId, productSetId) {
  // [START vision_product_search_remove_product_from_product_set]
  const vision = require('@google-cloud/vision');

  const client = new vision.ProductSearchClient();

  async function removeProductFromProductSet() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const productSetPath = client.productSetPath(
      projectId,
      location,
      productSetId
    );

    const productPath = client.productPath(projectId, location, productId);

    const request = {
      name: productSetPath,
      product: productPath,
    };

    await client.removeProductFromProductSet(request);
    console.log('Product removed from product set.');
  }
  removeProductFromProductSet();
  // [END vision_product_search_remove_product_from_product_set]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
