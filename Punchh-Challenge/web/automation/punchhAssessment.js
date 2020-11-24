const timeout = 30000

module.exports = {
    'Launch Punchh website and validate search box' : function (browser) {
      const resultsForSearchTerm = browser.page.resultsForSearchTerm()

      // Navigate to website and search for a word
      resultsForSearchTerm.launchWebsite(timeout)
      searchKeyword = 'test'
      resultsForSearchTerm.searchForUserTerm(searchKeyword, timeout)
      // Check search box has the same word
      resultsForSearchTerm.validateSearchBox(searchKeyword, timeout)
    },
    'Search for Loyalty and validate results': function (browser) {
      const resultsForSearchTerm = browser.page.resultsForSearchTerm()

      // Search for a user specified word
      searchKeyword = 'loyalty'
      resultsForSearchTerm.searchForUserTerm(searchKeyword, timeout)

      // Validate order of the search results
      resultsForSearchTerm.resultsForLoyalty(timeout)
    },
    'Search for Brand and validate results': function (browser) {
      const resultsForSearchTerm = browser.page.resultsForSearchTerm()

      // Search for a user specified word
      searchKeyword = 'brand'
      resultsForSearchTerm.searchForUserTerm(searchKeyword, timeout)

      // Validate order of the search results
      resultsForSearchTerm.resultsForBrand(timeout)
    }
  };