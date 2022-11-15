[![Tests](https://github.com/YourOpenData/ckanext-yoda_theme/workflows/Tests/badge.svg?branch=main)](https://github.com/YourOpenData/ckanext-yoda_theme/actions)

# ckanext-yoda_theme

**TODO:** Put a description of your extension here:  What does it do? What features does it have? Consider including some screenshots or embedding a video!


## Requirements

**TODO:** For example, you might want to mention here which versions of CKAN this
extension works with.

If your extension works across different versions you can add the following table:

Compatibility with core CKAN versions:

| CKAN version    | Compatible?   |
| --------------- | ------------- |
| 2.6 and earlier | not tested    |
| 2.7             | not tested    |
| 2.8             | not tested    |
| 2.9             | not tested    |

Suggested values:

* "yes"
* "not tested" - I can't think of a reason why it wouldn't work
* "not yet" - there is an intention to get it working
* "no"


## Installation

**TODO:** Add any additional install steps to the list below.
   For example installing any non-Python dependencies or adding any required
   config settings.

To install ckanext-yoda_theme:

1. Activate your CKAN virtual environment, for example:

     . /usr/lib/ckan/default/bin/activate

2. Clone the source and install it on the virtualenv

    git clone https://github.com/YourOpenData/ckanext-yoda_theme.git
    cd ckanext-yoda_theme
    pip install -e .
	pip install -r requirements.txt

3. Add `yoda_theme` to the `ckan.plugins` setting in your CKAN
   config file (by default the config file is located at
   `/etc/ckan/default/ckan.ini`).

4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu:

     sudo service apache2 reload


**INSTALL FRONTEND DEPENDENCES:** The front end stylesheets are written using Sass (this depends on [Node.js](https://nodejs.org/en/) and occasionally [Ruby](https://www.ruby-lang.org/es/documentation/installation/#apt) being installed on the system).


To install Sass run:
    
     npm install -g sass


To compile Sass install the following VSCode plugins:
1. Sass:

     syler.sass-indented
2. Live Sass Compiler. (_Don't forget to run it while coding_):

     glenn2223.live-sass

To compile Sass and save the CSS output in a different folder, go to VSCode [settings](https://code.visualstudio.com/docs/getstarted/settings) and open settings.json for copy:
    
     "liveSassCompile.settings.formats": [
        {
          "extensionName": ".css",
          "format": "compressed",
          "savePath": "~/css/"
        }
    ]

The result will be the next **file structure** located in the public directory:

     sass/
        css/
          main.css
          main.css.map
     main.sass

Finaly, when you already end coding please run:
    
     sass ckanext/yoda_theme/public/scss/main sass ckanext/yoda_theme/public/scss/css/main.css

This will remove the css and css.map stylesheets, and keep only the main.css and main.css.map stylesheet. These are the only two stylesheets needed for development.

## Config settings

None at present

**TODO:** Document any optional config settings here. For example:

	# The minimum number of hours to wait before re-checking a resource
	# (optional, default: 24).
	ckanext.yoda_theme.some_setting = some_default_value


## Developer installation

To install ckanext-yoda_theme for development, activate your CKAN virtualenv and
do:

    git clone https://github.com/YourOpenData/ckanext-yoda_theme.git
    cd ckanext-yoda_theme
    python setup.py develop
    pip install -r dev-requirements.txt


## Tests

To run the tests, do:

    pytest --ckan-ini=test.ini


## Releasing a new version of ckanext-yoda_theme

If ckanext-yoda_theme should be available on PyPI you can follow these steps to publish a new version:

1. Update the version number in the `setup.py` file. See [PEP 440](http://legacy.python.org/dev/peps/pep-0440/#public-version-identifiers) for how to choose version numbers.

2. Make sure you have the latest version of necessary packages:

    pip install --upgrade setuptools wheel twine

3. Create a source and binary distributions of the new version:

       python setup.py sdist bdist_wheel && twine check dist/*

   Fix any errors you get.

4. Upload the source distribution to PyPI:

       twine upload dist/*

5. Commit any outstanding changes:

       git commit -a
       git push

6. Tag the new release of the project on GitHub with the version number from
   the `setup.py` file. For example if the version number in `setup.py` is
   0.0.1 then do:

       git tag 0.0.1
       git push --tags

## License

[AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html)
