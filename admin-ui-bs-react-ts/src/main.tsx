import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Milestones:
Fetch Data using the API and display 
Display data in tabular form - Checkbox, Name, email, Role, Actions
Column titles must stand out
Search Bar - filter on any property.
Responsive - mobile screen as well
Edit and Delete button - no need to persists
Pagination
10 row in a page
Pagination buttons
Checkbox button on each row - select one or more rows. A selected row is highlighted with a grayish background color. 
'Delete Selected' button at the bottom left - Multiple selected rows can be deleted at once using the 
Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.
*/
