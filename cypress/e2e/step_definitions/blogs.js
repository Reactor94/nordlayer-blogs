import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { blogsPage } from '@pages/BlogsPage'

Given(/^User is on the blogs page$/, () => {
  cy.visit("/");
  blogsPage.acceptAllCookies();
});

When(/^User enters "(.*)" in the search field, and submits the search$/, (searchText) => {
  blogsPage.searchArticle(searchText);
});

Then(/^User sees the article title "(.*)" in the found results$/, (articleTitle) => {
  blogsPage.verifyArticleTitle(articleTitle)
});

Then(/^User sees at least one result$/, () => {
  blogsPage.verifyArticlesResultNumber()
});

When(/^User opens "(.*)" article$/, (articleTitle) => {
  blogsPage.openArticle(articleTitle)
});

When(/^User sees "(.*)" as a content in the article$/, (articleContent) => {
  blogsPage.verifyBlogContentIsPresent(articleContent)
});

Then(/^User sees articles related to the "(.*)" based on the selected "(.*)"$/, (category) => {
  blogsPage.verifyArticleCategoriesForLinks(category)
});

Then(/^User sees related articles belonging to the same category "(.*)" as the opened article$/, (category) => {
  blogsPage.verifyRelatedArticleCategory(category)
});
