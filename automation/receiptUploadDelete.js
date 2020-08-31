const timeout = 30000

module.exports = {
    'Validate Hubdoc login page' : function (browser) {
      const loginLogoutPage = browser.page.loginLogoutPage()
      loginLogoutPage.validateLoginPage(timeout)
    },
    'Login with test account' : function (browser) {
        const loginLogoutPage = browser.page.loginLogoutPage()
        loginLogoutPage.successfulLogin('apurvanataraj@gmail.com', 'XeroPassword1!')
    },
    'Upload receipt, Publish' : function (browser) {
        const receiptPage = browser.page.receiptPage()
        receiptPage.uploadReceipt(timeout)
        browser.refresh()
        receiptPage.publishProceed(timeout)
    },
    'Check Integrations' : function (browser) {
        const integrationPage = browser.page.integrationPage()
        integrationPage.checkIntegrations(timeout)
    },
    'Delete Receipt' : function (browser) {
        const receiptPage = browser.page.receiptPage()
        receiptPage.deleteReceipt(timeout)
    },
    'Logout' : function (browser) {
        const loginLogoutPage = browser.page.loginLogoutPage()
        loginLogoutPage.logout(timeout)
    }
  };