# API for Fetching Companies and Frequency for LeetCode Questions

This repository contains an API for fetching companies associated with LeetCode questions and the frequency of those questions. The API endpoints are as follows:

1. `/companies`: Fetches companies associated with LeetCode questions.
   - Endpoint: `localhost:8080/?link=`
   - Method: GET
   - Parameters:
     - `link`: The link to the LeetCode question.
   - Example usage: `localhost:8080/?link=https://leetcode.com/problems/two-sum/`

2. `/count`: Fetches the frequency of LeetCode questions.
   - Endpoint: `localhost:8080/count`
   - Method: GET
   - Example usage: `localhost:8080/count`


