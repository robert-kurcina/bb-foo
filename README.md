# For Natalie
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Part 1 -  3 Existing Web site critique
_Please go to our website at www.backblaze.com and look around.  Provide at least 3 suggestions for improving the quality of our site UI from a technical perspective._
#### LAYOUT
- Mobile Chrome > iPhone6 layout panels are too tight
- Tablet Chrome > isPad portrait - privacy policy . Navigation is clipped. But it looks somewhat OK on home page. Seems that navigation needs to be a component which behaves consistently.
- Desktop (1280 x 1024) > General Theming >
  -- Navigation sub-menu has a vertically unbalanced gradient and is white over gray. Hover is gray over gray.
  -- Gutter (margin / padding) between visual elements varies within each context of presentation between 10px, 1em, 15px, 40px
  -- Button border radius is 4px and 6px
  -- Affordance on Cloud Storage > Solutions > Media is limited to the hyperlink text
  -- Help > Search combo-icon icon need to be centered. Results page needs to tighten results. Search combo-icon is different than on Help root page.

#### ACCESSIBILITY
- Improve Accessibility > Section 508 compliance via https://www.section508.gov/content/learn
- Improve signaling > Links are blue and quotes which are not links are light blue. Make different.
- Improve signaling > Links are sometimes gray, blue, light blue-gray, ... too many variations
- /blog/ > Be First to Know modal is low contrast upon darkened background.
- /blog/ > should include email input mask and perhaps validation before click Join button

#### PERFORMANCE
- Page load seems slow ... enable caching
- In general, perhaps create an SPA
- Have buttons give early signal for hover + click




### Part 2 - XSS Concerns
_Have you ever had code that was exposed to a cross-site scripting (XSS) attack?  If so, please briefly describe the bug and how you fixed it. If no, please briefly describe what processes / protocls you follow to prevent XSS attacks._

#### PREFACE
I have never experienced XSS attack in any code that I've deployed.
Therefore I will describe what techniques I implemented for my current project at Verifone.

#### OVERVIEW
"XSS is the practice of getting a (client) webpage to do something that is not intended."
see https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet

##### TECHNIQUES (client)
- Escape all inserts into the DOM from the application code from the templating library (via MustacheJS and CKEditor)
- Use input masks and input validation on input fields (base form model)
- Always use JSON.parse on API responses before consuming it in the application code (base model)
- Don't evaluate JavaScript - do not use eval(foo) or new Function(foo); not for URLs nor from application code
- Calls to APIs (mid-tier and CDN) are white-listed to specific domains (base api model)
- Always send X-Requested-With:XMLHttpRequest to help server

##### TECHNIQUES (service)
- Ensure JSON data is returned by APIs with Content-type header set to application/json
- Escape all content sent to the datastore (server-side outbound filter)
- Enable Response Header for HTTPOnly issued within Response Headers to restrict manipulation of cookies
- Enable Response Header for Content Security Policy issued within Response Headers to limit origin sources for scripts and other assets (see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
xsss
- Enable Response Header for X-XSS-Protection:1; mode=block (MSIE feature)
- Enable Response Header for X-Frame-Options: SAMEORIGIN

##### SUPPORT
- We have multiple environments (localhost, DEV, QA, STAGING, PROD) to allow code migration into compartments.
At each step we can evaluate the quality of our code before moving into the next container. Developers control localhost and DEV (on AWS). QA controls QA. IST controls STAGING.
- We also use the Veracode product suite. This is implemented and managed by a separate team, but we are issued a static analysis report which I receive and view using Veracode's Web site.




### Part 3 - Implement Sample Design Requirements
_Engineers usually receive UI designs for new features as images.  Below is a typical UI fragment that needs to be converted into html along with providing some basic javascript functionality.  Please create this page fragment and submit it to Natalie as a zip file via email._

Your submission will be analyzed based on:
- Requirements met
- Overall look reasonably matches the design
- Javascript functionality
- Coding style & cleanliness


#### Installation
```
1. Presuming that NodeJS and npm is available, otherwise visit here: [https://docs.npmjs.com/getting-started/installing-node
2. cd ~/projects
3. git clone https://github.com/robert-kurcina/bb-foo.git
4. cd bb-foot.git
5. yarn install
6. yarn start
```
#### Viewing
- A browser will open at port 3000 and display some cool stuff
- Also, consider using Browser Stack to view upon different platforms https://www.browserstack.com/
