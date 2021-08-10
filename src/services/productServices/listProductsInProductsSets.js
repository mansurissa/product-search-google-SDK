function main(projectId, location, productSetId) {
  // [START vision_product_search_list_products_in_product_set]
  const vision = require('@google-cloud/vision');

  const client = new vision.ProductSearchClient();

  async function listProductsInProductSet() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productSetId = 'Id of the product set';
    const productSetPath = client.productSetPath(
      projectId,
      location,
      productSetId
    );
    const request = {
      name: productSetPath,
    };

    const [products] = await client.listProductsInProductSet(request);
    products.forEach(product => {
      console.log(`Product name: ${product.name}`);
      console.log(`Product display name: ${product.displayName}`);
    });
  }
  listProductsInProductSet();
  // [END vision_product_search_list_products_in_product_set]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
