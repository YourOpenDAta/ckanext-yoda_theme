import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
from ckan.lib.plugins import DefaultTranslation


from ckan.plugins import  ITranslation
from ckan.plugins.interfaces import IConfigurer

class YodaThemePlugin(plugins.SingletonPlugin, DefaultTranslation):
    plugins.implements(ITranslation)
    plugins.implements(IConfigurer)

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic', 'yoda_theme')
