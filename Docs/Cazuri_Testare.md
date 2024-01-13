| Test Case ID | WA_001          | Test Case Description | Verify Weather Information Retrieval | Version |
| ------------ | --------------- | --------------------- | ------------------------------------ | ------- |
| Created By   | Mariana Georges | Reviewed By           | Liviu Padurariu                      | 1.0     |

| QA Tester’s Log Review             |
| ---------------------------------- |
| Initial creation of the test case. |

| Tester's Name   | Date Tested | Test Case (Pass/Fail/Not Executed) |
| --------------- | ----------- | ---------------------------------- |
| Mariana Georges | 01.01.2024  | Pass                               |

| S#  | Prerequisites:                 |     | S#  | Test Data             |
| --- | ------------------------------ | --- | --- | --------------------- |
| 1   | Access to a modern web browser |     | 1   | City Name: "New York" |

| Test Scenario                                                                           |
| --------------------------------------------------------------------------------------- |
| Verify that the React Weather App can retrieve weather information for a specific city. |

| Steps | Step Details                                      | Expected Results         | Actual Results                  | Pass / Fail / Not executed / Suspended |
| ----- | ------------------------------------------------- | ------------------------ | ------------------------------- | -------------------------------------- |
| 1     | Navigate to the React Weather App.                | Site should open         | As Expected / Site was open     | Pass                                   |
| 2     | Enter the city name "New York" in the search box. | City name can be entered | As Expected / City was entered  | Pass                                   |
| 3     | Click on the search icon.                         | Can click on the search  | As Expected / Was able to click | Pass                                   |

---

---

| Test Case ID | WA_002          | Test Case Description | Verify Language Switcher Functionality | Version |
| ------------ | --------------- | --------------------- | -------------------------------------- | ------- |
| Created By   | Mariana Georges | Reviewed By           | Liviu Padurariu                        | 1.0     |

| QA Tester’s Log Review             |
| ---------------------------------- |
| Initial creation of the test case. |

| Tester's Name   | Date Tested | Test Case (Pass/Fail/Not Executed) |
| --------------- | ----------- | ---------------------------------- |
| Mariana Georges | 01.01.2024  | Pass                               |

| S#  | Prerequisites:                 |     | S#  | Test Data                               |
| --- | ------------------------------ | --- | --- | --------------------------------------- |
| 1   | Access to a modern web browser |     | 1   | Selectable languages: English, Romanian |

| Test Scenario                                                                                 |
| --------------------------------------------------------------------------------------------- |
| Verify that the React Weather App's language switcher changes the app's language as expected. |

| Steps | Step Details                                                    | Expected Results           | Actual Results                    | Pass / Fail / Not executed / Suspended |
| ----- | --------------------------------------------------------------- | -------------------------- | --------------------------------- | -------------------------------------- |
| 1     | Navigate to the React Weather App.                              | Site should open           | As Expected / Site was open       | Pass                                   |
| 2     | Observe the default language.                                   | Language should be english | As Expected / Language is english | Pass                                   |
| 3     | Click on the language switcher and select a different language. | Should be able to click ro | As Expected / Was able to click   | Pass                                   |
| 4     | Verify that the app's language changes.                         | Language changed           | As Expected / Language changed    | Pass                                   |

---

---

| Test Case ID | WA_003          | Test Case Description | Verify Search Functionality with Invalid Input | Version |
| ------------ | --------------- | --------------------- | ---------------------------------------------- | ------- |
| Created By   | Liviu Padurariu | Reviewed By           | Mariana Georges                                | 1.0     |

| QA Tester’s Log Review             |
| ---------------------------------- |
| Initial creation of the test case. |

| Tester's Name   | Date Tested | Test Case (Pass/Fail/Not Executed) |
| --------------- | ----------- | ---------------------------------- |
| Liviu Padurariu | 01.01.2024  | Pass                               |

| S#  | Prerequisites:                 |     | S#  | Test Data                        |
| --- | ------------------------------ | --- | --- | -------------------------------- |
| 1   | Access to a modern web browser |     | 1   | Invalid City Name: "1234invalid" |

| Test Scenario                                                       |
| ------------------------------------------------------------------- |
| Verify that the React Weather App handles invalid input gracefully. |

| Steps | Step Details                                                 | Expected Results              | Actual Results                     | Pass / Fail / Not executed / Suspended |
| ----- | ------------------------------------------------------------ | ----------------------------- | ---------------------------------- | -------------------------------------- |
| 1     | Navigate to the React Weather App.                           | Site should open              | As Expected / Site was open        | Pass                                   |
| 2     | Enter the invalid city name "1234invalid" in the search box. | Text can be entered           | As Expected / Text was entered     | Pass                                   |
| 3     | Click on the search icon.                                    | Can click on the search       | As Expected / Was able to click    | Pass                                   |
| 4     | Check for the app behaviour when city name is invalid.       | App should show error message | As Expected / Error message showed | Pass                                   |

---

---

| Test Case ID | WA_004          | Test Case Description | Verify Search Functionality with Invalid Input | Version |
| ------------ | --------------- | --------------------- | ---------------------------------------------- | ------- |
| Created By   | Liviu Padurariu | Reviewed By           | Mariana Georges                                | 1.0     |

| QA Tester’s Log Review             |
| ---------------------------------- |
| Initial creation of the test case. |

| Tester's Name   | Date Tested | Test Case (Pass/Fail/Not Executed) |
| --------------- | ----------- | ---------------------------------- |
| Liviu Padurariu | 01.01.2024  | Pass                               |

| S#  | Prerequisites:                 |     | S#  | Test Data                        |
| --- | ------------------------------ | --- | --- | -------------------------------- |
| 1   | Access to a modern web browser |     | 1   | Invalid City Name: "1234invalid" |

| Test Scenario                                                       |
| ------------------------------------------------------------------- |
| Verify that the React Weather App handles invalid input gracefully. |

| Steps | Step Details                                                 | Expected Results              | Actual Results                     | Pass / Fail / Not executed / Suspended |
| ----- | ------------------------------------------------------------ | ----------------------------- | ---------------------------------- | -------------------------------------- |
| 1     | Navigate to the React Weather App.                           | Site should open              | As Expected / Site was open        | Pass                                   |
| 2     | Enter the invalid city name "1234invalid" in the search box. | Text can be entered           | As Expected / Text was entered     | Pass                                   |
| 3     | Click on the search icon.                                    | Can click on the search       | As Expected / Was able to click    | Pass                                   |
| 4     | Check for the app behaviour when city name is invalid.       | App should show error message | As Expected / Error message showed | Pass                                   |

---
