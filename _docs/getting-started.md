---
tags: 
 - jekyll
 - github
description: Getting started with Tw-Jekyll
author:
  name: Vanessa Sochat
  github: vsoch
---

## Features

### User Interaction


On the right side of any page, you'll notice links to edit the page, or
open an issue. This ensures that any time you have a question or want to 
suggest or request a change, you can do so immediately and link directly
to the section of interest. The sections on the page also have permalinks (¶) so
you can link directly to them.

### Search

The entire site, including posts and documentation, is indexed and then available
for search at the top or side of the page. Give it a try! The content is rendered
into window data that is used by lunr.js to generate the search results.
If you want to exclude any file from search, add this to its front end matter:

```
---
layout: null
excluded_in_search: true
---
```

The example above is for a javascript file in the assets folder that is used as a template,
but should not be included in search.

### External Search

If you have an external site with a search GET endpoint (meaning one that ends
in `?q=<term>`, then you can automatically link page tags to search this endpoint.
For example, on an HPC site I'd want a tag like "mpi" to do a search on 
[http://ask.cyberinfrastructure.org](http://ask.cyberinfrastructure.org) for mpi.
See the [tags](#tags) section below for how to configure this.

### Documentation

Documentation pages should be written in the `docs` folder of the repository,
and you are allowed to use whatever level of nesting (subfolders) that 
works for you! It's a Jekyll [collection](https://jekyllrb.com/docs/collections/), which means that you
can add other content (images, scripts) and it will be included for linking to.
To create subfolders with files, you can simply create new markdon files. For example:

 - `_docs/subfolder/example-page.md` renders to `http://localhost:4000/tw-jekyll/docs/subfolder/example-page/`
 - `_docs/subfolder.md` renders to `http://localhost:4000/tw-jekyll/docs/subfolder/`

And the page you are reading now renders from `_docs/getting-started.md`

#### Organization

The url that will render is based on the path. For example, if we had the following structure:

```
docs/
  getting-started.md
  clusters/
     sherlock/
         getting-started.md
```

The first page (akin to the one you are reading) would render at it's path,
`/docs/getting-started/`.


#### Linking

From that page, we could provide the
direct path in markdown to any subfolder to link to it, such as the second
getting started page for sherlock:

```
{% raw %}[example](clusters/sherlock/getting-started.md){% endraw %}
```

[Here](example-page) is an example link to a relative path of a file (`example-page.md`)
in the same directory, and from that page you can test linking to a subfolder.
In the case of not having a subfolder, we could write the link out directly:

```
{% raw %}[example]({{ site.baseurl }}/docs/clusters/sherlock/getting-started.md){% endraw %}
```

or just put the relative path:

```
{% raw %}[Here](example-page){% endraw %}
```

or better, there is a shortand trick! We can use the provided "includes" 
template to do the same based on the path to create a link:

```
{% raw %}{% include doc.html name="Sherlock Cluster" path="clusters/sherlock/getting-started" %}{% endraw %}
```
The path should be relative to the docs folder.

### Pages

The `pages` folder uses the same page layout, but is not part of the docs collection.
The two are provided to create a distinction between website pages (e.g., about,
feed.xml) and documentation pages.  

### Navigation

Whether you place your page under "pages" or "docs," for those pages that you want added to the navigation, 
you should add them to `_data/toc.yml`. If you've defined a `permalink` in the
front end matter, you can use that (e.g., "About" below). If you haven't and
want to link to docs, the url is the path starting with the docs folder.
Here is an example (currently the active example):

```yaml
- title: Documentation
  url: docs
  links:
    - title: "Getting Started"
      url: "docs/getting-started"
      children:
        - title: Features
          url: "docs/getting-started#getting-started"
        - title: Development
          url: "docs/getting-started#development"
        - title: Customization
          url: "docs/getting-started#customization"
    - title: "Extras"
      url: "docs/extras"
      children:
        - title: Quizzes
          url: "docs/extras/example-quiz"
    - title: "About"
      url: "about"
    - title: "News"
      url: "news
```

If you want to add an external url for a parent or child, do this:

```yaml
  - title: GitHub Repository
    external_url: https://www.github.com/vsoch/tw-jekyll
```

### News Posts

It might be the case that your site or group has news items that would
warrent sharing with the community, and should be available as a feed.
For this reason, you can write traditional [posts](https://jekyllrb.com/docs/posts/) in the `_posts`
folder that will parse into the site [feed]({{ site.baseurl }}/feed.xml)
The bottom of the page links the user to a post archive, where posts are organized
according to the year.

### Buttons

The following buttons are available - you can match the class on the button to the examples below.
All buttons include the basic `.btn` class.

<button class="btn btn-red">.btn-red</button>
<button class="btn btn-orange">.btn-orange</button>
<button class="btn btn-yellow">.btn-yellow</button>
<button class="btn btn-green">.btn-green</button>
<button class="btn btn-blue">.btn-blue</button>
<button class="btn btn-purple">.btn-purple</button>
<button class="btn btn-pink">.btn-pink</button>


```html
<button class="btn btn-red">.btn .btn-red</button>
<button class="btn btn-orange">.btn .btn-orange</button>
<button class="btn btn-yellow">.btn .btn-yellow</button>
<button class="btn btn-green">.btn .btn-green</button>
<button class="btn btn-blue">.btn .btn-blue</button>
<button class="btn btn-purple">.btn .btn-purple</button>
<button class="btn btn-pink">.btn .btn-pink</button>
```

### Badges

For tags that appear on posts, you can edit `badge_color` in the `_config.yaml`
to change the color. If not set, it defaults to the lovely purple of the main site.
For news post items, it's also nice to be able to tag it with something that indicates
a status, such as "warning" or "alert." For this reason, you can add badges to
the front end matter of any post page, and they will render colored by a type,
with the tag of your choice. For example, here is an example header for
a post:

```yaml
---
title:  "Two Thousand Nineteen"
date:   2019-06-28 18:52:21
categories: jekyll update
badges:
 - color: orange
   name: warning-badge
 - color: red
   name: danger-badge
---
```

And to easily include a badge, just use the include:

```
{% raw %}{% include badge.html text="good-job" style="background-color:green" %}{% endraw %}
```

To generate this:

{% include badge.html text="good-job" style="background-color:green" %}


### Callout

A callout is a little box to draw emphasis to something:


{% include callout.html text="Hey you, look right here!" %}


That looks like this:

```
{% raw %}{% include callout.html text="Hey you, look right here!" %}{% endraw %}
```

Or change the background color:

```
{% raw %}{% include callout.html text="Hey you! The sky is blue!" color="skyblue" %}{% endraw %}
```

{% include callout.html text="Hey you, look right here!" color="skyblue" %}

### Quotes

Here is what a blockquote looks like. We could probably improve upon this with different colors, etc.

> A famous person once said, "Hark! I do believe I'd like some cheese"
> -- Famous Person

## Development

Initially (on OS X), you will need to setup [Brew](http://brew.sh/) which is a package manager for OS X and [Git](https://git-scm.com/). To install Brew and Git, run the following commands:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install git
```

If you are on Debian/Ubuntu, then you can easily install git with `apt-get`

```bash
apt-get update && apt-get install -y git
```

### Install Jekyll

You can also install Jekyll with brew.

```bash
$ brew install ruby
$ gem install jekyll
$ gem install bundler
$ bundle install
```

On Ubuntu I do a different method:

```bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL
rbenv install 2.3.1
rbenv global 2.3.1
gem install bundler
rbenv rehash
ruby -v

# Rails
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
gem install rails -v 4.2.6
rbenv rehash

# Jekyll
gem install jekyll
gem install github-pages
gem install jekyll-sass-converter

rbenv rehash
```

### Get the code

You should first fork the repository to your GitHub organization or username,
and then clone it.

```bash
$ git clone https://github.com/<username>/tw-jekyll.git docs
$ cd docs
```

You can clone the repository right to where you want to host the docs:

```bash
$ git clone https://github.com/<username>/tw-jekyll.git docs
$ cd docs
```


### Serve

Depending on how you installed jekyll:

```bash
jekyll serve
# or
bundle exec jekyll serve
```


### Preview

We provide a [CircleCI](https://circleci.com/) configuration recipe that you
can use to preview your site on CircleCI before merging into master. You
should follow the instructions to [set up a project](https://circleci.com/docs/enterprise/quick-start/),
and then in the project settings be sure to enable building forked build requests,
and to cancel redundant builds. The preview will be built on CircleCI, and saved
to static files for you to browse. The only change you will need is to edit
the static files location to be the name of your respository, which is at te
bottom of the `.circleci/config.yml` file:

```yaml
      - store_artifacts:
          path: ~/repo/_site
          destination: tw-jekyll
```

In the above, the destination should coincide with your repository name.
Remember that for most links, CircleCI won't honor an `index.html` file in a subfolder
(e.g., `subfolder/index.html` will not be served as `subfolder/`, so for example,
you might need to turn this:

```
https://<circleci>/0/tw-jekyll/docs/getting-started/
```
into this:

```
https://<circleci>/0/tw-jekyll/docs/getting-started/index.html
```

## Customization

#### config.yml

To edit configuration values, customize the [_config.yml](_config.yml). There are a lot
of small details that are included there that are not mentioned here!
Please [open an issue](https://www.github.com/{{ site.github_user }}/{{ site.github_user }}/issues) if you have questions.

#### Adding pages

To add pages, write them into the [pages](https://github.com/vsoch/tw-jekyll/tree/main/pages) folder. 
You define urls based on the `permalink` attribute in your pages,
and then add them to the navigation by adding to the content of [_data/toc.yml](https://github.com/vsoch/tw-jekyll/blob/main/_data/toc.yml).

#### Tags

If you include tags on a page, by default they will link to the [tags page]({{ site.url }}{{ site.baseurl }}/tags) on the site. However, if you define a `tag_search_endpoint` url in your configuration file, by clicking
the tag, the user will be taken to this page to search for it. As an example,
we define the current search endpoint to be Ask Cyberinfrastructure, and
page tags link to a search on it:

```yaml
tag_search_endpoint: https://ask.cyberinfrastructure.org/search?q=
tag_color: danger # danger, success, warning, primary, secondary, info
```

Note that you can also choose a color! The tags appear at the top of the page,
as they do on this page. The tags should be defined like this in the front end
matter:

```yaml
tags: 
 - jekyll
 - github
```

They are appended to the first h1 block, so generally your pages should have a header.
If you comment out this variable, then each of your tags will link to it's appropriate
spot on the tags page linked above.

```yaml
#tag_search_endpoint: https://ask.cyberinfrastructure.org/search?q=
tag_color: primary # danger, success, warning, primary, info, secondary
```

