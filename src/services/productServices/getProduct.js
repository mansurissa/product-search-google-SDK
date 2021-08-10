function main(projectId, location, productId) {
  // [START vision_product_search_get_product]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  async function getProduct() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';
    // const productId = 'Id of the product';

    // Resource path that represents Google Cloud Platform location.
    const productPath = client.productPath(projectId, location, productId);

    const [product] = await client.getProduct({name: productPath});
    console.log(`Product name: ${product.name}`);
    console.log(`Product id: ${product.name.split('/').pop()}`);
    console.log(`Product display name: ${product.displayName}`);
    console.log(`Product description: ${product.description}`);
    console.log(`Product category: ${product.productCategory}`);
    console.log(`Product labels: ${product.productLabels}`);
  }
  getProduct();
  // [END vision_product_search_get_product]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
