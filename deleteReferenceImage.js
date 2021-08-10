function main(projectId, location, productId, referenceImageId) {
  // [START vision_product_search_delete_reference_image]
  const vision = require('@google-cloud/vision');

  const client = new vision.ProductSearchClient();

  async function deleteReferenceImage() {
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

    await client.deleteReferenceImage(request);
    console.log('Reference image deleted from product.');
  }
  deleteReferenceImage();
  // [END vision_product_search_delete_reference_image]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
