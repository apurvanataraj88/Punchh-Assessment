module.exports = {
    elements: {
        // BestBuy receipt tag
        bestBuyReceipt: {
          locateStrategy: 'xpath',
          selector: './/span[@class="biller-name"][text()="Best Buy"]'
        },
        // Xero button
        xeroIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-xero-logo "]'
        },
        // QBO button
        qboIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-qbo-logo "]'
        },
        // Billcom button
        billcomIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-billcom-logo "]'
        },
        // ShareFile button
        shareFileIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-sharefile-logo "]'
        },
        // Box button
        boxIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-box-logo "]'
        },
        // Smart Vault button
        smartVaultIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-smartvault-logo "]'
        },
        // Dropbox button
        dropboxIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-dropbox-logo "]'
        },
        // Google Drive button
        googleDriveIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-googledrive-logo "]'
        },
        // Email button
        emailIntegration: {
        locateStrategy: 'xpath',
        selector: './/div[@id="add-new-integrations"]//a[@class="editdoc-email-logo "]'
        }
      },
      commands: [
        { // Check for Integration options
            checkIntegrations(timeout) {
              return this.waitForElementVisible('@bestBuyReceipt', timeout).click('@bestBuyReceipt')
                .waitForElementVisible('@xeroIntegration', timeout)
                .waitForElementVisible('@qboIntegration', timeout)
                .waitForElementVisible('@billcomIntegration', timeout)
                .waitForElementVisible('@shareFileIntegration', timeout)
                .waitForElementVisible('@boxIntegration', timeout)
                .getLocationInView('@smartVaultIntegration').waitForElementVisible('@smartVaultIntegration', timeout)
                .waitForElementVisible('@dropboxIntegration', timeout)
                .waitForElementVisible('@googleDriveIntegration', timeout)
                .waitForElementVisible('@emailIntegration', timeout).pause(2000)
            }
        }
    ]
}  