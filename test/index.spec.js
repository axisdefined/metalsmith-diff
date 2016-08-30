import { expect } from 'chai';
import diff from '../';

describe('metalsmith-diff', () => {

  it('should work', () => {
    expect(typeof diff).to.equal('function');
  });

// - checks both stat and cache to re-create file objects
// - only those change
// - Diffing Algorithm
// - Build from Data Files. Look at Webpack. Discovery.

// Okay, is that possible to have happen? I think it should mirror the src directory in cases where files are deleted. Wouldn't that makes sense? If I delete a file in the src/assets/img/foo.png for example, it should also delete within the destination directory dist/assets/img/foo.png.

// I was recently discussing these issues here

// Here's an idea:

// The files aren't external. They sit in src/data. And regardless, you can still see the whole project from the process.cwd()

// I think what I'm getting at is that there needs to be somewhat of a dependency graph built to map the data across files.

// Along with this, would need to be a cache json file that keeps track of all changes. When a file is changed it could do this:

// [check the current directory and format it in json for all current files] =>

// [analyze the layout files and data files to build a dependency graph in json] =>

// [diff both the current directory json and dependency graph json with the current cache json and graph json to see if any current files are deleted, modified, or created] =>

// [perform necessary clean ups on the files in the destination folder] =>

// [create a new version of the cache based on changes in json] =>

// [pass the new metadata on to the build] =>

// Again, the dependency graph would work fine. If data is going into Metalsmith, than that data can be associated with files. In this case, it might require going through all files as a string and regexing for the values. For example, `{{ site.title }}` in `templates/includes/header.liquid`, would need to be mapped. 

// ```
// {
//   "site.title": [
//     "templates/includes/header.liquid",
//     // may also include
//     "templates/includes/footer.liquid"
//    ]
// }
// ```

// Now any time that data changes, it would go through that list:
// - check for ignores
// - create a new object of files to pass to metalsmith
// - build the new files and overwrite what's in the destination directory

// It would also be able to match up markdown files that specify a `layout` property.

// For example:
// *index.md* that has a `layout: home.liquid`

// would map to:

// ```
// {
//   "index.md": [
//     "templates/layouts/home.liquid"
//   ]
// }
// ```

// Any time that file changed, it would know that home.liquid needs to change.

// You could specify the options for regex parsing:

// ```
// "start": "{{",
// "end": "}}"
// ```
// In between it would look for the data that matches `data.value`

// On the first build it could:

// - go through all the files in `src`
// - check the file types and see if they are `utf8` encoded
// - read files in as string
// - parse files for data from specified option
// - build dependency graph from files with data from metalsmith.metadata
// - store the graph as .json

// On subsequent builds:



})