Feature: Blogs 

    Background:
        Given User is on the blogs page

    Scenario: User should be able to perform search for existing articles and receive relevant results (by article title)
        When User enters "What is content filtering" in the search field, and submits the search
        And User sees at least one result
        Then User sees the article title "What is content filtering?" in the found results

    Scenario: User should be able to perform search for existing articles and receive relevant results (by article content)
        When User enters "Why is content filtering important?" in the search field, and submits the search
        And User sees at least one result
        And User opens "What is content filtering" article
        Then User sees "Why is content filtering important?" as a content in the article

    Scenario: User can browse blog post categories and see articles that belong these categories
       Then User sees articles related to the "<category>" based on the selected "<category>"
       Examples:
           | category         |
           | In Depth         |
           | Cloud Security   |
           | Product Updates  |
           | Case Studies     |
           | Partner Program  |
           | News             |
           | Remote Work      |
           | SASE             |
           | Zero Trust       |

    Scenario: On individual blog post page, user can see related articles, which belong to the same category as the opened blog post
        When User enters "Why is content filtering important?" in the search field, and submits the search
        And User sees at least one result
        And User opens "What is content filtering?" article
        Then User sees related articles belonging to the same category "In Depth" as the opened article
