class BlogsPage {
  elements = {
    searchFieldButton: () => cy.get("[data-testid='blog-search-input']"),
    acceptAllCookies: () => cy.get(('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')),
    blogsResultSection: () => cy.get("[data-testid='blog-results-section-root']"),
    searchedItemsRoot: () => cy.get("[class*=SearchedItems_root]"),
    blogContentContainer: () => cy.get("[class*=BlogPostContent_contentContainer]"),
    articleCategoriesWrapper: () => cy.get("[class*=BlogNavigation_submenuWrapper]"),
    articlesContainer: () => cy.get("[class*=BlogPostGrid_root]"),
    articleCategory: () => cy.get("[class*=Submenu_root]"),
    articleTitle: () => cy.get("h1[class*=Heading_root]"),
    articleItem: () => this.elements.blogsResultSection().find("a[class*=Link_inherit]"),
    blogsArticleTitle: () => this.elements.articleItem().find("[data-testid='heading']"),
    relatedArticles: () => cy.get('[data-testid="related-articles-block"]'),
    relatedArticleItem : () => cy.get('[class*=RelatedArticles_listItem]')
  };

  acceptAllCookies(){
    this.elements.acceptAllCookies().click()
  }

  searchArticle(searchText){
    this.elements.searchFieldButton().click().type(searchText).type('{enter}')
  }

  verifyMainHeaderArticle(mainHeaderArticle){
    this.elements.blogsResultSection().find('h1').should('contain.text', mainHeaderArticle)
  }

  verifyArticlesResultNumber(){
    this.elements.articleItem().should('have.length.at.least', 1)
  }
  
  verifyArticleTitle(articleTitle){
    this.elements.blogsArticleTitle().should('contain.text', articleTitle)
  }

  openArticle(articleTitle){
    this.elements.blogsArticleTitle().contains(articleTitle).click()
  }

  verifyBlogContentIsPresent(blogContent){
    this.elements.blogContentContainer().should('contain.text', blogContent)
  }

  verifyArticleCategoriesForLinks(categories){
      this.elements.articleCategoriesWrapper().contains(categories).click()
      this.elements.articleItem().should('contain.text', categories)
  }

  verifyRelatedArticleCategory(category){
    this.elements.articleCategory().should('contain.text', category)
    this.elements.relatedArticles().should('have.length.at.least', 1)
    this.elements.relatedArticleItem().each((relatedArticleItem) => {
      cy.wrap(relatedArticleItem).should('contain.text', category);
    });
  }
}


export const blogsPage = new BlogsPage();
