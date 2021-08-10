function main(projectId, location) {
  // [START vision_product_search_list_product_sets]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  async function listProductSets() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'Your Google Cloud project Id';
    // const location = 'A compute region name';

    // Resource path that represents Google Cloud Platform location.
    const locationPath = client.locationPath(projectId, location);

    const [productSets] = await client.listProductSets({parent: locationPath});
    productSets.forEach(productSet => {
      console.log(`Product Set name: ${productSet.name}`);
      console.log(`Product Set display name: ${productSet.displayName}`);
    });
  }
  listProductSets();
  // [END vision_product_search_list_product_sets]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
