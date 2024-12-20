 <img style="width: 100%" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3k1YWNudGhnd2ZpbWN4bXJmMG42YWNmcTd5M3hydHVldnJ3bXVqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72Fk2ZH8NJ6BNa8w/giphy.webp" />
<br/>
Stay Puft Forms is a typesafe, feature rich form component originally built for an e-commerce web app. The styling is dependant on Tailwindcss as well as some prebuilt components and Tailwind variables from  the `nwc-slimer` library. Due to ease of use regarding validation, the “package” is not a dedicated npm package. I decided to store it locally in our web app while ironing out all the bugs.
<hr/>

## [See Demo](https://staypuftforms.netlify.app/)

## Features:
 - Crafted with **simplicity** for a smooth developer experience.
  - **Accessibility** is front and center — because everyone should be able to use your forms!
  - Built on `react-hook-form` for easy input error handling right where you need it.
  - Powered by `zod` to keep input validation rock-solid.
  - Is developing and testing getting tedious? Use `fillValues` and a the `fillValuesCallback` props to auto-fill the form while developing.
  - Clean, consistent styling with error messages that make sense.
  - Google ReCAPTCHA integration for added security.
  - Includes a `honeypot` field to stop spam in its tracks.

 ## Ease of Use
 The actual code here isn't the point but take a look at the <b>amount of code</b> our developers would have to write to implenent the same form with <b>fewer</b> features.
 <div className="w-full flex justify-evenly">
   <div>Before Puft Forms</div>
   <div>After Puft Forms</div>
  </div>
 <div className="w-full h-[250px] md:h-[500px] flex justify-around overflow-hidden mt-[5px]">
 <div className="w-full overflow-y-scroll">
 <img
   src="assets/before.png"
 className="w-full"
 />
 </div>
 <div className="w-full overflow-y-scroll">
 <img
   src="assets/after.png"
 className="w-full"
 />
 </div>
 </div>

 ## Leverages:
 - `react-hook-form`
 - `zod`
 - `tailwindcss`
 - `react-google-recaptcha-enterprise`

  ## [Demo](https://staypuftforms.netlify.app/)