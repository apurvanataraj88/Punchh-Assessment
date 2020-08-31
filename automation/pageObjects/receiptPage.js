module.exports = {
    elements: {
        // Upload document button
        uplodDocTag: {
        locateStrategy: 'xpath',
        selector: './/button[@id="add-receipt"][text()=" Upload Document"]'
        },
        // Browse button to select receipt
        browseButton: {
          locateStrategy: 'xpath',
          selector: '(.//input[@type="file"])[2]'
        },
        // Completed text tag
        uploadCompleted: {
          locateStrategy: 'xpath',
          selector: './/span[@class="fileinfo"][text()=" - Completed"]'
        },
        // Close upload modal
        closeUploadTag: {
          locateStrategy: 'xpath',
          selector: './/button[@class="close-modal"]'
        },
        // BestBuy receipt tag
        bestBuyReceipt: {
          locateStrategy: 'xpath',
          selector: './/span[@class="biller-name"][text()="Best Buy"]'
        },
        // Publish and Proceed tag
        publishProceedTag: {
          locateStrategy: 'xpath',
          selector: './/span[@class="publish-and-next"]'
        },
        // Delete tag
        deleteTag: {
          locateStrategy: 'xpath',
          selector: './/a[@class="delete-btn action"]'
        },
        // Cancel delete tag
        cancelDelTag: {
          locateStrategy: 'xpath',
          selector: './/a[@class="btn cancel"]'
        },
        // Confirm delete tag
        confirmDelTag: {
          locateStrategy: 'xpath',
          selector: './/a[@class="btn ok btn-primary"]'
        }
      },
      commands: [
        { // Upload receipt and Publish
          uploadReceipt(timeout) {
            return this.waitForElementVisible('@uplodDocTag', timeout).click('@uplodDocTag')
              // .setValue('@browseButton', require('path').resolve(__dirname + '/SampleReceipt.pdf'))
              .setValue('@browseButton', require('path').resolve(__dirname + '/BestBuy.png'))
              .waitForElementVisible('@uploadCompleted', timeout)
              .waitForElementVisible('@closeUploadTag', timeout).click('@closeUploadTag').pause(5000)
            }
        },
        { // Publish receipt and Proceed to next receipt
          publishProceed(timeout) {
            return this.waitForElementVisible('@bestBuyReceipt', timeout).click('@bestBuyReceipt')
            .waitForElementVisible('@publishProceedTag', timeout).click('@publishProceedTag')
            .waitForElementNotPresent('@publishProceedTag', timeout)
          }
        },
        { // Delete receipt
          deleteReceipt(timeout) {
            return this.waitForElementVisible('@bestBuyReceipt', timeout).click('@bestBuyReceipt')
              .waitForElementVisible('@deleteTag', timeout).click('@deleteTag')
              .waitForElementVisible('@cancelDelTag', timeout).click('@cancelDelTag')
              .waitForElementVisible('@deleteTag', timeout).click('@deleteTag')
              .waitForElementVisible('@confirmDelTag', timeout).click('@confirmDelTag')
              .waitForElementNotPresent('@bestBuyReceipt').pause(5000)
            }
        }
    ]
}  