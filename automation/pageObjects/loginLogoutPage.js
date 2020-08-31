module.exports = {
  url: 'https://app.hubdoc.com/login',
    elements: {
      // Base URL
      root: {
      selector: './/body[@class="simple-page login"]',
      locateStrategy: 'xpath'
      },
      // Sign in Banner
      signInBannerTag: {
        locateStrategy: 'xpath',
        selector: './/h2[text()="Sign in to your account"]'
      },
      // Sign in with Xero
      signInXeroTag: {
        locateStrategy: 'xpath',
        selector: './/a[@class="btn btn-success btn-large btn-terms-conds"][text()="Sign In With Xero"]'
      },
      // Email Tag
      emailTag: {
        locateStrategy: 'xpath',
        selector: './/input[@id="email"]'
      },
      // Password Tag
      passwordTag: {
        locateStrategy: 'xpath',
        selector: './/input[@id="password"]'
      },
      // Sign in button
      signInButton: {
        locateStrategy: 'xpath',
        selector: './/button[@id="btn-signin"][text()="Sign In Securely"]'
      },
      // Remember Me Tag
      rememberMeTag: {
        locateStrategy: 'xpath',
        selector: './/input[@id="remember_email"]'
      },
      // Forgot Password Tag
      forgotPasswordTag: {
        locateStrategy: 'xpath',
        selector: './/a[@href="/forgot_password"]'
      },
      // Sign Up button
      signUpButton: {
        locateStrategy: 'xpath',
        selector: './/a[@href="/signup/choose"][text()="Sign up, it\'s free"]'
      },
      // Privacy Policy
      privacyPolicy: {
        locateStrategy: 'xpath',
        selector: './/a[@href="http://hubdoc.com/support/privacy"][text()="Privacy Policy"]'
      },
      // Add account tag indicating successful login
      addAccountTag: {
          locateStrategy: 'xpath',
          selector: './/a[@href="/add-account"]'
      },
      // Profile button
      profileButton: {
          locateStrategy: 'xpath',
          selector: './/a[@id="account-dropdown"]'
      },
      // Logout Button
      logoutButton: {
          locateStrategy: 'xpath',
          selector: './/a[@id="logout-link"]'
      }
    },
    commands: [
      { // Validate Login Page
      validateLoginPage(timeout) {
        return this.navigate().waitForElementVisible('@root', timeout)
          .waitForElementVisible('@signInBannerTag', timeout)
          .waitForElementVisible('@signInXeroTag', timeout)
          .waitForElementVisible('@emailTag', timeout)
          .waitForElementVisible('@passwordTag', timeout)
          .waitForElementVisible('@signInButton', timeout)
          .waitForElementVisible('@rememberMeTag', timeout)
          .waitForElementVisible('@forgotPasswordTag', timeout)
          .waitForElementVisible('@signUpButton', timeout)
          .waitForElementVisible('@privacyPolicy', timeout).pause(2000)
        }
      },
      { // Successful Login
        successfulLogin(email, password, timeout) {
          return this.waitForElementVisible('@emailTag', timeout).setValue('@emailTag', email)
            .waitForElementVisible('@passwordTag', timeout).setValue('@passwordTag', password)
            .waitForElementVisible('@rememberMeTag', timeout).click('@rememberMeTag')
            .waitForElementVisible('@signInButton', timeout).click('@signInButton')
            .waitForElementVisible('@addAccountTag', timeout).pause(2000)
      }
    },
    { // Successful Logout
      logout(timeout) {
        return this.waitForElementVisible('@profileButton', timeout).click('@profileButton')
          .waitForElementVisible('@logoutButton', timeout).click('@logoutButton')
          .waitForElementNotPresent('@profileButton', timeout).pause(2000)
      }
    }
  ]
}  