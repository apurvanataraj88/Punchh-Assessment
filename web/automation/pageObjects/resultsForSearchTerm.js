module.exports = {
    url: 'https://punchh.com/',
    elements: {
      // First result
      cookiesTag: {
        selector: './/a[@id="CybotCookiebotDialogBodyButtonAccept"]',
        locateStrategy: 'xpath'
      },
      // Tag  for search icon
      searchIconTag: {
        selector: './/img[@class="search-open"]',
        locateStrategy: 'xpath'
      },
      // Tab for search bar
      searchBarTag: {
        locateStrategy: 'xpath',
        selector: './/form[@class="topbar-search-form"]//input[@class="search-field"]'
      },
      // Results banner tag
      resultsBanner: {
        locateStrategy: 'xpath',
        selector: './/h1[text()="Search Results"]'
      },
      // Tag for first search result
      firstResultTag: {
        selector: '(.//p[@class="the-date"])[1]',
        locateStrategy: 'xpath'
      },
      // Tag for second search result
      secondResultTag: {
        selector: '(.//p[@class="the-date"])[2]',
        locateStrategy: 'xpath'
      },
      // Tag for third search result
      thirdResultTag: {
        selector: '(.//p[@class="the-date"])[3]',
        locateStrategy: 'xpath'
      },
      // Tag for fourth search result
      fourthResultTag: {
        selector: '(.//p[@class="the-date"])[4]',
        locateStrategy: 'xpath'
      },
      // Tag for fifth search result
      fifthResultTag: {
        selector: '(.//p[@class="the-date"])[5]',
        locateStrategy: 'xpath'
      }
    },
    commands: [
      { // Navigate to website and accept cookies
        launchWebsite(timeout) {
          return this.navigate().pause(3000)
          .waitForElementVisible('@cookiesTag', timeout).click('@cookiesTag')  
        }
      },
      { // Search for user specified word
        searchForUserTerm(searchTerm, timeout) {
          return this.navigate().pause(1500).waitForElementVisible('@searchIconTag', timeout).click('@searchIconTag')
            .waitForElementVisible('@searchBarTag').clearValue('@searchBarTag')
              .setValue('@searchBarTag', searchTerm + '\n')
            // Ensure results page is loaded
            .waitForElementVisible('@resultsBanner').pause(1000)
        }
      },
      { // Check search box has the same word as originally entered by the user
        validateSearchBox(searchTerm, timeout) {
          return this.waitForElementVisible('@searchIconTag', timeout).click('@searchIconTag').pause(1000)
            .assert.value('@searchBarTag', searchTerm)
        }
      },
      { // Check order of search results for Loyalty
        resultsForLoyalty(timeout) {
          return this.waitForElementVisible('@firstResultTag', timeout).assert.containsText('@firstResultTag', 'August 22, 2018')
            .waitForElementVisible('@secondResultTag', timeout).assert.containsText('@secondResultTag', 'July 23, 2020')
            .waitForElementVisible('@thirdResultTag', timeout).assert.containsText('@thirdResultTag', 'December 2, 2019')
            .waitForElementVisible('@fourthResultTag', timeout).assert.containsText('@fourthResultTag', 'November 20, 2019')
            .waitForElementVisible('@fifthResultTag', timeout).assert.containsText('@fifthResultTag', 'November 2, 2020')
        }
      },
      { // Check order of search results for Brand
        resultsForBrand(timeout) {
          return this.waitForElementVisible('@firstResultTag', timeout).assert.containsText('@firstResultTag', 'March 2, 2020')
            .waitForElementVisible('@secondResultTag', timeout).assert.containsText('@secondResultTag', 'March 1, 2019')
            .waitForElementVisible('@thirdResultTag', timeout).assert.containsText('@thirdResultTag', 'October 9, 2020')
            .waitForElementVisible('@fourthResultTag', timeout).assert.containsText('@fourthResultTag', 'June 29, 2018')
            .waitForElementVisible('@fifthResultTag', timeout).assert.containsText('@fifthResultTag', 'July 23, 2020')
        }
      }
    ]
  }  