# Tech Task From NuxGame

# Test Case: Change Interface Language by Authorized User

Pre-conditions
- User has a valid Wikipedia account.
- User is logged into the Wikipedia  application.
- Application is running with default interface language (e.g., English).
- Stable internet connection is available.

Test Steps & Expected Results

1. Navigate to the user profile -> Preference section -> Settings page is displayed.
2. Open language dropdown in the section Internationalisation -> Language selection option is visible.
3. Click on the Ukrainian language option. -> Ukrainian is selected
4. Click the Save button -> Interface is changed to Ukrainian localization
6. Verify that title and html tag '/html' -> Entire interface is shown in the chosen language and '/html' tag has attribute 'lang=uk'
5. Open language dropdown in the section Internationalisation -> Language selection option is visible.
4. Click on the English language option. -> English is selected
4. Click the Save button -> Interface is changed to English localization
6. Verify that title and html tag '/html' -> Entire interface is shown in the chosen language and '/html' tag has attribute 'lang=en'
7. Log out-> User log out

## Run test in the Docker

1. Create file `.env` in the root of the project with login data
   ```
   WIKI_USERNAME=loggin
   WIKI_PASSWORD=password
   ```

2. Built image and run tests:
   ```bash
   docker compose run --rm e2e
   ```
   Or you can do it use cmd with sending variables in command:
   ```bash
   docker compose run --rm -e WIKI_USERNAME=... -e WIKI_PASSWORD=... e2e
   ```

3. After executing **HTML-report** situate on local folder of the host:
   - `./playwright-report/` — HTML-report 

4. Open report in the  browser:
   ```bash
   npx playwright show-report playwright-report
   ```
